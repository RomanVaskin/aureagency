import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { PageEyebrow } from '@/components/page-eyebrow'
import { ServicesPackages } from '@/components/services-packages'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  alternates: { canonical: '/services' },
  title: 'Услуги — AURE AGENCY | Маркетинг загородной недвижимости',
  description:
    'Маркетинг, упаковка, продвижение и система продаж проектов загородной недвижимости.',
}

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="font-primary tracking-body">
        <section id="top" className="mx-auto max-w-[1400px] px-5 pb-16 pt-28 md:px-10 md:pb-20 md:pt-36">
          <div className="fade-up">
            <PageEyebrow title="Услуги" />
            <h1 className="mt-6 font-primary text-[length:min(calc((100vw_-_2.5rem)/15.5),24px)] font-light leading-[1.1] tracking-display text-[#161616] min-[360px]:whitespace-nowrap md:text-[length:min(calc((100vw_-_5rem)/16.5),34px)] lg:text-[length:clamp(34px,3.2vw,52px)]">
              Маркетинг и продажи
              <br />
              загородной недвижимости
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Создаём комплексную систему продвижения проектов загородной недвижимости — от
              позиционирования и упаковки до привлечения клиентов и сопровождения продаж.
            </p>
          </div>
        </section>

        <ServicesPackages />
      </main>
      <SiteFooter />
    </>
  )
}
