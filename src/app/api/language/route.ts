import { NextRequest, NextResponse } from 'next/server'
import { isLocale, localizedPath } from '@/lib/i18n'
import { LANGUAGE_COOKIE, LANGUAGE_COOKIE_MAX_AGE } from '@/lib/locale-routing.mjs'

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin')
  if (request.headers.get('sec-fetch-site') === 'cross-site' || (origin && origin !== request.nextUrl.origin)) {
    return new NextResponse('Cross-site language changes are not allowed.', { status: 403 })
  }
  if (Number(request.headers.get('content-length')) > 4096) return new NextResponse(null, { status: 413 })
  let data: FormData
  try { data = await request.formData() } catch { return new NextResponse(null, { status: 400 }) }
  const locale = data.get('locale')
  const path = data.get('path')
  if (!isLocale(locale) || typeof path !== 'string' || path.length > 2048 || !path.startsWith('/') || path.startsWith('//') || /[\\\r\n]/.test(path)) {
    return new NextResponse('Invalid language or return path.', { status: 400 })
  }
  const target = new URL(localizedPath(locale, path), request.nextUrl.origin)
  const response = NextResponse.redirect(target, 303)
  response.headers.set('Cache-Control', 'private, no-store')
  response.cookies.set(LANGUAGE_COOKIE, locale, {
    httpOnly: true, secure: request.nextUrl.protocol === 'https:', sameSite: 'lax', path: '/', maxAge: LANGUAGE_COOKIE_MAX_AGE,
  })
  return response
}