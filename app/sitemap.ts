import type { MetadataRoute } from 'next'
import { getVisibleProjects } from '@/lib/project-catalog'

const BASE_URL = 'https://eosbureau.ru'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: BASE_URL, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE_URL}/projects`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    ...getVisibleProjects().map((p) => ({
      url: `${BASE_URL}/projects/${p.slug}`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
  ]
}
