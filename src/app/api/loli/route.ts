import { NextRequest, NextResponse } from 'next/server'
import {
  LOLI_API_URL,
  LOLI_USAGE_COOKIE,
  buildLoliSystemPrompt,
  createEmptyUsage,
  extractAssistantReply,
  issueUsageCookie,
  readUsageCookie,
  sanitizeChatMessages,
} from '@/lib/loli'
import { LOLI_COOKIE_MAX_AGE_SECONDS, LOLI_LIMIT } from '@/lib/loli-config'
import { contactDetails } from '@/lib/site'

export const runtime = 'nodejs'

function jsonResponse(body: object, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: {
      'Cache-Control': 'no-store',
    },
  })
}

function isAllowedOrigin(request: NextRequest) {
  const origin = request.headers.get('origin')
  const fetchSite = request.headers.get('sec-fetch-site')

  if (!origin) {
    return true
  }

  const originHost = normalizeHost(origin)

  if (!originHost) {
    return false
  }

  if (
    fetchSite === 'same-origin' ||
    fetchSite === 'same-site' ||
    fetchSite === 'none'
  ) {
    return true
  }

  return getAllowedHosts(request).has(originHost)
}

function getAllowedHosts(request: NextRequest) {
  const allowedHosts = new Set<string>()
  const directHost = normalizeHost(request.headers.get('host'))
  const forwardedHost = normalizeForwardedHost(request.headers.get('x-forwarded-host'))

  if (directHost) {
    allowedHosts.add(directHost)
  }

  if (forwardedHost) {
    allowedHosts.add(forwardedHost)
  }

  for (const value of [
    process.env.URL,
    process.env.DEPLOY_URL,
    process.env.DEPLOY_PRIME_URL,
    process.env.SITE_URL,
    process.env.NEXT_PUBLIC_SITE_URL,
  ]) {
    const normalized = normalizeHost(value)

    if (normalized) {
      allowedHosts.add(normalized)
    }
  }

  return allowedHosts
}

function normalizeForwardedHost(value: string | null) {
  if (!value) {
    return ''
  }

  const firstValue = value.split(',')[0]?.trim()

  return normalizeHost(firstValue)
}

function normalizeHost(value: string | null | undefined) {
  if (!value) {
    return ''
  }

  const trimmedValue = value.trim()

  if (!trimmedValue) {
    return ''
  }

  try {
    const url = new URL(
      trimmedValue.includes('://') ? trimmedValue : `https://${trimmedValue}`
    )

    return url.hostname.toLowerCase()
  } catch {
    return ''
  }
}

function getUsage(request: NextRequest) {
  return readUsageCookie(request.cookies.get(LOLI_USAGE_COOKIE)?.value) ?? createEmptyUsage()
}

export async function GET(request: NextRequest) {
  return jsonResponse({ usage: getUsage(request) })
}

export async function POST(request: NextRequest) {
  if (!isAllowedOrigin(request)) {
    return jsonResponse(
      {
        message: 'Cross-site requests are blocked for this assistant.',
      },
      403
    )
  }

  const apiKey = process.env.APIFREE_API_KEY?.trim()
  const model = process.env.LOLI_MODEL?.trim()

  if (!apiKey || !model) {
    return jsonResponse(
      {
        message:
          'Loli is not configured yet. Add APIFREE_API_KEY and LOLI_MODEL on the server.',
      },
      500
    )
  }

  const currentUsage = getUsage(request)

  if (currentUsage.questionsUsed >= LOLI_LIMIT) {
    return jsonResponse(
      {
        message:
          `This device has already used all ${LOLI_LIMIT} free Loli questions. Please contact us on WhatsApp or email for more help.`,
        usage: currentUsage,
        contact: {
          whatsapp: contactDetails.whatsapp,
          email: `mailto:${contactDetails.email}`,
        },
      },
      429
    )
  }

  let payload: unknown

  try {
    payload = await request.json()
  } catch {
    return jsonResponse(
      {
        message: 'Invalid JSON body.',
      },
      400
    )
  }

  const messages = sanitizeChatMessages(
    payload && typeof payload === 'object' && 'messages' in payload
      ? payload.messages
      : undefined
  )

  if (!messages.length || messages.at(-1)?.role !== 'user') {
    return jsonResponse(
      {
        message: 'Please send at least one valid user message.',
      },
      400
    )
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 20000)

  let upstreamResponse: Response
  let upstreamData: unknown

  try {
    upstreamResponse = await fetch(LOLI_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        temperature: 0.8,
        max_tokens: 350,
        messages: [
          {
            role: 'system',
            content: buildLoliSystemPrompt(),
          },
          ...messages,
        ],
      }),
      cache: 'no-store',
      signal: controller.signal,
    })

    upstreamData = await upstreamResponse.json().catch(() => null)
  } catch {
    return jsonResponse(
      {
        message:
          'Loli could not reach the APIFree.ai service right now. Please try again in a moment or contact us directly.',
      },
      502
    )
  } finally {
    clearTimeout(timeout)
  }

  if (!upstreamResponse.ok) {
    const upstreamMessage =
      upstreamData &&
      typeof upstreamData === 'object' &&
      'error' in upstreamData &&
      upstreamData.error &&
      typeof upstreamData.error === 'object' &&
      'message' in upstreamData.error &&
      typeof upstreamData.error.message === 'string'
        ? upstreamData.error.message
        : 'The upstream provider returned an error.'

    return jsonResponse(
      {
        message: `APIFree.ai request failed: ${upstreamMessage}`,
      },
      502
    )
  }

  const answer = extractAssistantReply(upstreamData)

  if (!answer) {
    return jsonResponse(
      {
        message: 'Loli did not return a readable response. Please try again.',
      },
      502
    )
  }

  const { cookieValue, usage } = issueUsageCookie(
    currentUsage,
    currentUsage.questionsUsed + 1
  )

  const response = jsonResponse({
    answer,
    usage,
    contact: {
      whatsapp: contactDetails.whatsapp,
      email: `mailto:${contactDetails.email}`,
    },
  })

  response.cookies.set({
    name: LOLI_USAGE_COOKIE,
    value: cookieValue,
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: LOLI_COOKIE_MAX_AGE_SECONDS,
    path: '/',
  })

  return response
}
