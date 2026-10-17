export const locales = ['en', 'my']
export const LANGUAGE_COOKIE = 'site_language'
export const LANGUAGE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365

export function isLocale(value) {
  return locales.includes(value)
}

export function pathHasLocale(pathname) {
  return locales.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`))
}

export function localizedPath(locale, path = '/') {
  const withoutLocale = path.replace(/^\/(en|my)(?=\/|[?#]|$)/, '')
  return `/${locale}${withoutLocale === '/' ? '' : withoutLocale.startsWith('/') || withoutLocale.startsWith('?') || withoutLocale.startsWith('#') ? withoutLocale : `/${withoutLocale}`}`
}

/** @param {{preference?: string, country?: string, acceptLanguage?: string}} options */
export function selectLocale({ preference, country, acceptLanguage = '' }) {
  if (isLocale(preference)) return preference
  if (country?.toUpperCase() === 'MM') return 'my'
  const languages = acceptLanguage.split(',').map((entry, index) => {
    const [tag, ...parameters] = entry.trim().toLowerCase().split(';')
    const quality = parameters.find((part) => part.trim().startsWith('q='))
    return { language: tag.split('-')[0], quality: quality ? Number(quality.trim().slice(2)) : 1, index }
  }).filter(({ language, quality }) => isLocale(language) && quality > 0 && quality <= 1)
    .sort((a, b) => b.quality - a.quality || a.index - b.index)
  return languages[0]?.language || 'en'
}

export function languageCookie(cookieHeader = '') {
  const value = cookieHeader.split(';').map((part) => part.trim()).find((part) => part.startsWith(`${LANGUAGE_COOKIE}=`))?.slice(LANGUAGE_COOKIE.length + 1)
  return isLocale(value) ? value : undefined
}

export function shouldLocalize(pathname) {
  return !pathHasLocale(pathname) && !/^\/(api|_next|\.well-known)(\/|$)/.test(pathname) && !pathname.includes('.') && pathname !== '/opengraph-image'
}