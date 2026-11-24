import { SiteHeader } from '@/components/site-header'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const geistMono = localFont({ src: './fonts/geist-mono.woff2', weight: '100 900', variable: '--font-geist-mono' })
/** Тексты, меню, подписи */
const jost = localFont({ src: './fonts/jost.woff2', weight: '100 900', variable: '--font-jost' })
/** Пункты мобильного меню (.mobile-menu-link в globals.css) */
const inter = localFont({ src: './fonts/inter.woff2', weight: '100 900', variable: '--font-inter' })
/** Заголовки проектов и разделов: серифные капслоком с широкой разрядкой */
const cormorant = localFont({
  src: './fonts/cormorant-garamond.woff2',
  weight: '300 700',
  variable: '--font-cormorant',
  adjustFontFallback: 'Times New Roman',
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
