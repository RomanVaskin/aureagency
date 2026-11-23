import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteFooter } from '@/components/site-footer'
import { HEADING_SIZE, PageIntro } from '@/components/page-intro'
import { ProcessTimeline } from '@/components/process-timeline'
import { PriceTabs } from '@/components/price-tabs'
import { PRICE_TABS } from '@/lib/pricing'
import { ServicesExplorer } from './services-explorer'

export const metadata: Metadata = {
  title: 'Услуги — EOS Bureau',
  description: 'EOS Bureau — студия архитектуры и дизайна интерьера в Москве. Подход, услуги и этапы работы.',
  alternates: { canonical: '/services' },
}

const SERVICES = [
  ['Архитектура', 'Частные дома и реконструкция: от концепции до рабочей документации.'],
  ['Дизайн интерьера', 'Разрабатываем планировку и концепцию, создаём визуализации и полный рабочий проект.'],
  ['Комплектация', 'Разрабатываем спецификации, подбираем поставщиков и организуем заказ всех элементов интерьера.'],
  ['Авторский надзор', 'Контролируем ход работ, качество исполнения и соответствие проектным решениям.'],
]

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
          titleClassName="max-w-[560px] text-[15px] leading-[1.6] tracking-normal md:text-[18px]"
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

        <section className="mx-auto max-w-[1600px] px-5 pt-28 md:px-10 md:pt-48">
          <h2 className="text-[13px] text-muted-foreground">Что мы делаем</h2>
          <ul className="mt-10 border-t border-border">
            {SERVICES.map(([t, d]) => (
              <li key={t} className="grid gap-2 border-b border-border py-6 md:grid-cols-12 md:gap-8 md:py-8">
                <span className="text-[21px] font-light tracking-[-0.02em] md:col-span-5 md:text-[32px]">{t}</span>
                <span className="text-[15px] leading-relaxed text-muted-foreground md:col-span-5 md:col-start-8 md:self-center">
                  {d}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Стоимость: две вкладки, список услуг — в lib/pricing.ts */}
        <section className="mx-auto max-w-[1600px] px-5 pt-28 md:px-10 md:pt-48">
          <h2 className="text-[13px] text-muted-foreground">Стоимость</h2>
          <div className="mt-10">
            <PriceTabs tabs={PRICE_TABS} />
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

        <section className="mx-auto max-w-[1600px] px-5 pt-28 md:px-10 md:pt-48">
          <Link href="/contact" className="group block border-t border-border pt-8">
            <span className="text-[13px] text-muted-foreground">Есть проект?</span>
            <span className={`mt-3 block font-light tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-2 ${HEADING_SIZE}`}>
              Напишите нам →
            </span>
          </Link>
        </section>

        <section aria-labelledby="services-details-title" className="mx-auto max-w-[1600px] px-5 pt-28 md:px-10 md:pt-48">
          <div className="border-t border-border pt-8">
            <h2 id="services-details-title" className={`font-light tracking-[-0.02em] ${HEADING_SIZE}`}>УСЛУГИ</h2>
            <div className="mt-8 max-w-[560px] md:mt-10">
              <p className="text-[21px] font-light tracking-[-0.02em] md:text-[32px]">
                От идеи пространства до её воплощения.
              </p>
              <p className="mt-4 text-[15px] leading-[1.6] text-muted-foreground md:text-[18px]">
                Проектируем интерьеры, в которых архитектура, материалы и детали формируют единое пространство.
                Сопровождаем проект от первых решений до реализации.
              </p>
            </div>
            <div className="mt-12 md:mt-20">
              <ServicesExplorer />
            </div>
          </div>
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
