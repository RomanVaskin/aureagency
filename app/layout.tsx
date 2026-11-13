import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Inter } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin', 'cyrillic'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })
const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
})

const SITE_TITLE = 'AURE AGENCY — Маркетинг загородной недвижимости'
const SITE_DESCRIPTION =
  'AURE AGENCY — маркетинг и digital-рост для коттеджных посёлков, девелоперов и строительных компаний. Превращаем маркетинг в продажи.'

export const metadata: Metadata = {
  metadataBase: new URL('https://aureagency.ru'),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  generator: 'v0.app',
  // Explicit link-preview tags (Telegram, WhatsApp, VK, social networks); pages that set
  // their own title/description still share this brand image and site name.
  openGraph: {
    type: 'website',
    siteName: 'AURE AGENCY',
    locale: 'ru_RU',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'AURE AGENCY — логотип на каменной стене' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/og-image.jpg'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`light bg-background ${geistSans.variable} ${geistMono.variable} ${inter.variable}`}>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
