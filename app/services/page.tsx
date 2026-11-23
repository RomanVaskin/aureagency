import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteFooter } from '@/components/site-footer'
import { HEADING_SIZE, PageIntro } from '@/components/page-intro'
import { ProcessTimeline } from '@/components/process-timeline'
import { PriceTabs } from '@/components/price-tabs'
import { PRICE_TABS } from '@/lib/pricing'

export const metadata: Metadata = {
  title: 'Услуги — EOS Bureau',
  description: 'EOS Bureau — студия архитектуры и дизайна интерьера в Москве. Подход, услуги и этапы работы.',
  alternates: { canonical: '/services' },
}

const STEPS = [
  ['01', 'Знакомство', 'Знакомимся с объектом, проводим детальные обмеры и фиксируем особенности пространства. На основе полученных данных формируем основу будущего проекта.'],
  ['02', 'Концепция', 'Планировка, палитра материалов и настроение. Утверждаем направление до деталей.'],
  ['03', 'Проект', 'Рабочие чертежи, узлы, спецификации и визуализации ключевых помещений.'],
  ['04', 'Реализация', 'Комплектация и авторский надзор до момента, когда можно заезжать.'],
]

export default function ServicesPage() {
  return (
    <>
      <main className="font-primary">
        {/* фраза набрана мелко, как основной текст страницы */}
        <PageIntro
          className="pt-[calc(var(--site-header-height)+1rem)]! md:pt-[calc(var(--site-header-height)+1.25rem)]!"
          titleClassName="max-w-[680px] text-[21px] leading-[1.6] tracking-normal md:text-[24px]"
          action={
            <Link
              href="/contact"
              className="inline-block rounded-full bg-foreground px-7 py-3 text-[13px] tracking-[0.02em] text-background transition-opacity hover:opacity-80"
            >
              Обсудить проект
            </Link>
          }
        >
          Мы верим, что хороший интерьер не кричит. Он спокоен, удобен и с годами становится только лучше.
        </PageIntro>

        {/* Стоимость: две вкладки, список услуг — в lib/pricing.ts */}
        <section className="pt-7 md:pt-10">
          <h2 className="mx-auto max-w-[1600px] px-5 text-[13px] text-muted-foreground md:px-10">Стоимость</h2>
          <div className="dusk-block mt-3 md:mt-4">
            <div className="mx-auto max-w-[1600px] px-5 md:px-10">
              <PriceTabs tabs={PRICE_TABS} />
            </div>
          </div>
        </section>

        <ProcessTimeline
          label="Как мы работаем"
          heading={
            <>
              От первой встречи
              <br />
              до готового интерьера
            </>
          }
          steps={STEPS.map(([, title, text]) => ({ title, text }))}
        />

        <section className="mx-auto max-w-[1600px] px-5 pt-7 md:px-10 md:pt-10">
          <Link href="/contact" className="group block border-t border-border pt-4">
            <span className="text-[13px] text-muted-foreground">Есть проект?</span>
            <span className={`mt-3 block font-light tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-2 ${HEADING_SIZE}`}>
              Напишите нам →
            </span>
          </Link>
        </section>
      </main>
      <SiteFooter topSpacing="pt-14 md:pt-22" />
    </>
  )
}
