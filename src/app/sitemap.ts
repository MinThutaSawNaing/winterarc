import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/site'
import { services } from '@/lib/services'
import { locales, localizedPath, languageAlternates } from '@/lib/i18n'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) {
    return []
  }

  return ['', '/services', ...services.map((service) => `/services/${service.slug}`), '/privacy', '/terms', '/cookies'].flatMap((path) => locales.map((locale) => ({
    url: `${siteUrl}${localizedPath(locale, path || '/')}`,
    alternates: { languages: languageAlternates(path || '/') },
  })))
}
