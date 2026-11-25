import type { MetadataRoute } from 'next'

const BASE_URL = 'https://eosbureau.ru'

/** The public site is open to crawlers; the sitemap is the existing app/sitemap.ts. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
