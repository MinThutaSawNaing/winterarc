import { languageCookie, localizedPath, selectLocale, shouldLocalize } from '../../src/lib/locale-routing.mjs'

export default function languageRedirect(request, context) {
  const url = new URL(request.url)
  if (!['GET', 'HEAD'].includes(request.method) || !shouldLocalize(url.pathname)) return context.next()
  const locale = selectLocale({
    preference: languageCookie(request.headers.get('cookie') || ''),
    country: context.geo?.country?.code,
    acceptLanguage: request.headers.get('accept-language') || '',
  })
  url.pathname = localizedPath(locale, url.pathname)
  return new Response(null, {
    status: 307,
    headers: {
      Location: url.toString(),
      'Cache-Control': 'private, no-store',
      'Netlify-CDN-Cache-Control': 'no-store',
      Vary: 'Cookie, Accept-Language',
    },
  })
}