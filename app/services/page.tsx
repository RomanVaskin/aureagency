import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteFooter } from '@/components/site-footer'
import { HEADING_SIZE, PageIntro } from '@/components/page-intro'
import { ServicesExplorer } from './services-explorer'

export const metadata: Metadata = {
  title: 'Услуги — EOS Bureau',
  description: 'EOS Bureau — студия архитектуры и дизайна интерьера в Москве. Подход, услуги и этапы работы.',
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <>
      <main className="font-primary">
        <PageIntro
          action={
            <div className="max-w-[560px]">
              <p className="text-[21px] font-light tracking-[-0.02em] md:text-[32px]">
                От идеи пространства до её воплощения.
              </p>
              <p className="mt-4 text-[15px] leading-[1.6] text-muted-foreground md:text-[18px]">
                Проектируем интерьеры, в которых архитектура, материалы и детали формируют единое пространство.
                Сопровождаем проект от первых решений до реализации.
              </p>
            </div>
          }
        >
          УСЛУГИ
        </PageIntro>

        <section aria-label="Услуги бюро" className="mx-auto max-w-[1600px] px-5 pt-16 md:px-10 md:pt-28 lg:pt-36">
          <ServicesExplorer />
        </section>

        <section className="mx-auto max-w-[1600px] px-5 pt-28 md:px-10 md:pt-48">
          <div className="border-t border-border pt-8">
            <h2 className={`font-light tracking-[-0.02em] ${HEADING_SIZE}`}>ОБСУДИМ ВАШ ПРОЕКТ</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground md:text-[18px]">
              Расскажите нам о пространстве, которое хотите создать.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-foreground px-7 py-3 text-[13px] tracking-[0.02em] text-background transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground motion-reduce:transition-none"
            >
              Связаться с нами
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
