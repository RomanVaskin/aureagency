import { SiteHeader } from '@/components/site-header'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Geist_Mono, Inter, Jost } from 'next/font/google'
import './globals.css'

const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })
/** Тексты, меню, подписи */
const jost = Jost({ subsets: ['latin', 'cyrillic'], weight: ['300', '400', '500'], variable: '--font-jost' })
/** Пункты мобильного меню (.mobile-menu-link в globals.css) */
const inter = Inter({ subsets: ['latin', 'cyrillic'], weight: ['300', '400', '500'], variable: '--font-inter' })
/** Заголовки проектов и разделов: серифные капслоком с широкой разрядкой */
const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500'],
  variable: '--font-cormorant',
})

const SITE_TITLE = 'EOS Bureau — студия архитектуры и дизайна интерьера'
const SITE_DESCRIPTION =
  'EOS Bureau — студия архитектуры и дизайна интерьера в Москве. Частные дома, квартиры, отели и рестораны: тихие пространства из натуральных материалов.'

export const metadata: Metadata = {
  metadataBase: new URL('https://eosbureau.ru'),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  generator: 'v0.app',
  // Explicit link-preview tags (Telegram, WhatsApp, VK, social networks); pages that set
  // their own title/description still share this brand image and site name.
  openGraph: {
    type: 'website',
    siteName: 'EOS Bureau',
    locale: 'ru_RU',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: '/photos/kvartira-na-patriarshih-01.jpg', width: 1651, height: 953, alt: 'EOS Bureau — гостиная в квартире на Патриарших' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/photos/kvartira-na-patriarshih-01.jpg'],
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
    <html lang="ru" className={`light bg-background ${geistMono.variable} ${jost.variable} ${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased font-sans">
        <SiteHeader />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
