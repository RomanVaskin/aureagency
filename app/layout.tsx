import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Geist_Mono, Jost, Manrope } from 'next/font/google'
import './globals.css'

const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })
/** Тексты, меню, подписи */
const jost = Jost({ subsets: ['latin', 'cyrillic'], weight: ['300', '400', '500'], variable: '--font-jost' })
/** Страница «Проекты» (класс .type-manrope в globals.css) */
const manrope = Manrope({ subsets: ['latin', 'cyrillic'], weight: ['300', '400', '500'], variable: '--font-manrope' })
/** Заголовки проектов и разделов: серифные капслоком с широкой разрядкой */
const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500'],
  variable: '--font-cormorant',
})

const SITE_TITLE = 'AURE — студия архитектуры и дизайна интерьера'
const SITE_DESCRIPTION =
  'AURE — студия архитектуры и дизайна интерьера в Москве. Частные дома, квартиры, отели и рестораны: тихие пространства из натуральных материалов.'

export const metadata: Metadata = {
  metadataBase: new URL('https://aureagency.ru'),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  generator: 'v0.app',
  // Explicit link-preview tags (Telegram, WhatsApp, VK, social networks); pages that set
  // their own title/description still share this brand image and site name.
  openGraph: {
    type: 'website',
    siteName: 'AURE',
    locale: 'ru_RU',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'AURE — логотип на каменной стене' }],
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
  themeColor: '#f3efe6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`light bg-background ${geistMono.variable} ${jost.variable} ${cormorant.variable} ${manrope.variable}`}>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
