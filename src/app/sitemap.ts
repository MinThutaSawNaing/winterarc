import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/site'
import { services } from '@/lib/services'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) {
    return []
  }

  return ['', '/services', ...services.map((service) => `/services/${service.slug}`), '/privacy', '/terms', '/cookies'].map((path) => ({
    url: `${siteUrl}${path || '/'}`,
  }))
}
