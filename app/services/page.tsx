import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageIntro } from '@/components/page-intro'
import { ProjectImage } from '@/components/project-image'
import { Reveal } from '@/components/reveal'
import { SITE_IMAGES } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Услуги — AURE',
  description: 'AURE — студия архитектуры и дизайна интерьера в Москве. Подход, услуги и этапы работы.',
  alternates: { canonical: '/services' },
}

const SERVICES = [
  ['Архитектура', 'Частные дома и реконструкция: от концепции до рабочей документации.'],
  ['Дизайн интерьера', 'Планировка, концепция, полный рабочий проект и визуализации.'],
  ['Комплектация', 'Подбираем и заказываем материалы, свет, мебель, текстиль и предметы.'],
  ['Авторский надзор', 'Ведём стройку до финала, чтобы результат совпал с проектом.'],
]

const STEPS = [
  ['01', 'Знакомство', 'Встречаемся на объекте, слушаем, как вы живёте или работаете, и формулируем задачу.'],
  ['02', 'Концепция', 'Планировка, палитра материалов и настроение. Утверждаем направление до деталей.'],
  ['03', 'Проект', 'Рабочие чертежи, узлы, спецификации и визуализации ключевых помещений.'],
  ['04', 'Реализация', 'Комплектация и авторский надзор до момента, когда можно заезжать.'],
]

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="font-primary">
        <PageIntro label="Услуги">
          Мы верим, что хороший интерьер не кричит. Он спокоен, удобен и с годами становится только лучше.
        </PageIntro>

        <section className="mx-auto grid max-w-[1600px] gap-10 px-5 pt-16 md:grid-cols-12 md:gap-8 md:px-10 md:pt-28">
          <Reveal className="md:col-span-8">
            <ProjectImage {...SITE_IMAGES.studio} tone={1} variant={3} priority />
          </Reveal>
          <Reveal className="space-y-5 text-[15px] leading-relaxed text-muted-foreground md:col-span-3 md:col-start-10 md:self-end" index={1}>
            <p>
              AURE — команда архитекторов и дизайнеров в Москве. Мы работаем с частными домами, квартирами,
              отелями, ресторанами и офисами по всей России.
            </p>
            <p>
              Нам близок принцип мягкого минимализма: ясная планировка, природные материалы, приглушённая палитра и
              внимание к свету. Мы проектируем не картинку, а повседневную жизнь в пространстве.
            </p>
          </Reveal>
        </section>

        <section className="mx-auto max-w-[1600px] px-5 pt-28 md:px-10 md:pt-48">
          <h2 className="text-[13px] text-muted-foreground">Что мы делаем</h2>
          <ul className="mt-10 border-t border-border">
            {SERVICES.map(([t, d]) => (
              <li key={t} className="grid gap-2 border-b border-border py-6 md:grid-cols-12 md:gap-8 md:py-8">
                <span className="text-[24px] font-light tracking-[-0.02em] md:col-span-5 md:text-[32px]">{t}</span>
                <span className="text-[15px] leading-relaxed text-muted-foreground md:col-span-5 md:col-start-8 md:self-center">
                  {d}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto grid max-w-[1600px] gap-12 px-5 pt-28 md:grid-cols-12 md:gap-8 md:px-10 md:pt-48">
          <div className="md:col-span-6">
            <h2 className="text-[13px] text-muted-foreground">Как мы работаем</h2>
            <ol className="mt-10 space-y-10">
              {STEPS.map(([n, t, d], i) => (
                <Reveal key={n} index={i}>
                  <li className="grid grid-cols-[48px_1fr] gap-4">
                    <span className="text-[13px] text-muted-foreground">{n}</span>
                    <div>
                      <h3 className="text-[22px] font-light tracking-[-0.01em]">{t}</h3>
                      <p className="mt-2 max-w-[440px] text-[15px] leading-relaxed text-muted-foreground">{d}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal className="md:col-span-5 md:col-start-8" index={1}>
            <ProjectImage {...SITE_IMAGES.materials} tone={2} variant={1} />
          </Reveal>
        </section>

        <section className="mx-auto max-w-[1600px] px-5 pt-28 md:px-10 md:pt-48">
          <Link href="/contact" className="group block border-t border-border pt-8">
            <span className="text-[13px] text-muted-foreground">Есть проект?</span>
            <span className="mt-3 block text-[32px] font-light tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-2 md:text-[56px]">
              Напишите нам →
            </span>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
