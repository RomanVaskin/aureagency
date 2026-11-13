import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { PageEyebrow } from '@/components/page-eyebrow'
import { Process } from '@/components/process'
import { Results } from '@/components/results'
import { SiteFooter } from '@/components/site-footer'
import { ctaButtonClass } from '@/components/services-cta'

// WebP copies of public/images/ChatGPT Image 25 сент. 2026 г., 14_25_19.png
// and public/images/Копия process-hero.png
const PROCESS_IMAGE_SRC = '/process-hero-2.webp'
const PROCESS_IMAGE_ALT = 'Загородный дом у воды на закате с линиями архитектурного чертежа'
const PROCESS_CTA_IMAGE_SRC = '/process-cta-2.webp'
const PROCESS_CTA_IMAGE_ALT = 'Терраса загородного дома среди сосен с видом на озеро на закате'

export const metadata: Metadata = {
  alternates: { canonical: '/process' },
  title: 'Процесс — AURE AGENCY',
  description:
    'Как мы выстраиваем продвижение загородной недвижимости — от анализа проекта до масштабирования продаж и измеримого результата.',
}

export default function ProcessPage() {
  return (
    <>
      <SiteHeader />
      <main className="font-primary tracking-body">
        <section id="top" className="mx-auto max-w-[1400px] px-5 pt-28 md:px-10 md:pt-36">
          <div className="fade-up">
            <PageEyebrow title="Процесс" />
            <div className="mt-6 grid grid-cols-1 gap-10 border-b border-black/18 pb-20 md:grid-cols-[55fr_45fr] md:items-center md:gap-12 md:pb-24 lg:gap-16">
              <div>
                <h1 className="max-w-5xl font-primary text-balance text-[length:min(calc((100vw_-_2.5rem)/15.5),24px)] font-light leading-[1.1] tracking-display text-[#161616] md:text-[length:min(calc((100vw_-_5rem)/16.5),34px)] lg:text-[length:clamp(34px,3.2vw,52px)]">
                  Как устроен процесс продвижения
                </h1>
                <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                  Единый процесс, который мы проходим с каждым проектом — от анализа до измеримого
                  результата.
                </p>
              </div>
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={PROCESS_IMAGE_SRC}
                  alt={PROCESS_IMAGE_ALT}
                  fill
                  priority
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <Process />
        <Results />

        <section className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="relative aspect-[3/2] w-full overflow-hidden md:aspect-[17/4]">
            <Image
              src={PROCESS_CTA_IMAGE_SRC}
              alt={PROCESS_CTA_IMAGE_ALT}
              fill
              sizes="(min-width: 1400px) 1320px, 100vw"
              className="object-cover"
            />
          </div>
        </section>

        <div className="mx-auto flex max-w-[1400px] justify-center px-5 pb-20 pt-14 md:px-10 md:pb-24 md:pt-16">
          <Link href="/contact" className={ctaButtonClass}>
            Обсудить проект
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
