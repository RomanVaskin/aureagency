import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { PageEyebrow } from '@/components/page-eyebrow'
import { Digital } from '@/components/digital'
import { Promotion } from '@/components/promotion'
import { ServicesList } from '@/components/services-list'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  alternates: { canonical: '/system' },
  title: 'Система — AURE AGENCY',
  description:
    'Единая цифровая среда для работы с рекламой, лидами, клиентами и продажами загородной недвижимости.',
}

export default function SystemPage() {
  return (
    <>
      <SiteHeader />
      <main className="font-primary tracking-body">
        <section id="top" className="mx-auto max-w-[1400px] px-5 pb-16 pt-28 md:px-10 md:pb-20 md:pt-36">
          <div className="fade-up">
            <PageEyebrow title="Система" />
            <h1 className="mt-6 max-w-5xl font-primary text-balance text-[length:min(calc((100vw_-_2.5rem)/15.5),24px)] font-light leading-[1.1] tracking-display text-[#161616] md:text-[length:min(calc((100vw_-_5rem)/16.5),34px)] lg:text-[length:clamp(34px,3.2vw,52px)]">
              Система управления маркетингом и продажами
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Единая цифровая среда для работы с рекламой, лидами, клиентами и продажами загородной
              недвижимости.
            </p>
          </div>
        </section>

        <Digital />
        <Promotion />
        <ServicesList />
      </main>
      <SiteFooter />
    </>
  )
}
