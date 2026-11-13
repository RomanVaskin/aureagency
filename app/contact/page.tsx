import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  alternates: { canonical: '/contact' },
  title: 'Контакты — AURE AGENCY',
  description:
    'Расскажите о вашем проекте загородной недвижимости — предложим короткий путь к росту продаж.',
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="font-primary tracking-body">
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
