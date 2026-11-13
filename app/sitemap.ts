import type { MetadataRoute } from 'next'
import { PROJECTS_ENABLED } from '@/lib/sections'

const BASE_URL = 'https://aureagency.ru'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/system`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/process`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...(PROJECTS_ENABLED
      ? [
          {
            url: `${BASE_URL}/projects`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
          },
        ]
      : []),
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  return [...staticRoutes]
}
