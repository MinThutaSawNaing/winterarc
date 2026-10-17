import { NextRequest, NextResponse } from 'next/server'
import { languageCookie, localizedPath, selectLocale, shouldLocalize } from '@/lib/locale-routing.mjs'

// Netlify's edge function handles trusted country detection. This fallback also
// supports local development and other hosts, without trusting client geo headers.
export function proxy(request: NextRequest) {
  if (!shouldLocalize(request.nextUrl.pathname)) return NextResponse.next()
  // Framework middleware runs before user edge functions on Netlify. Let the
  // country-aware function below make this decision there, not this fallback.
  if (process.env.NETLIFY === 'true') return NextResponse.next()
  const locale = selectLocale({
    preference: languageCookie(request.headers.get('cookie') || ''),
    acceptLanguage: request.headers.get('accept-language') || '',
  })
  const url = request.nextUrl.clone()
  url.pathname = localizedPath(locale, url.pathname)
  const response = NextResponse.redirect(url, 307)
  response.headers.set('Cache-Control', 'private, no-store')
  response.headers.set('Vary', 'Cookie, Accept-Language')
  return response
}

export const config = { matcher: ['/((?!api|_next|.*\\..*|opengraph-image).*)'] }