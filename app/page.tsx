import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { HeroSlider } from '@/components/home/hero-slider'
import { WorkSection } from '@/components/home/work-section'
import { Feature } from '@/components/home/feature'
import { Media } from '@/components/home/media'
import { BLOCKS, SLIDES } from '@/lib/home'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

/** Главная: слайдер → чередование блоков ленты и полноэкранных кадров (lib/home.ts). */
export default function Page() {
  let tone = 0
  return (
    <>
      <SiteHeader overlay />
      <main>
        <HeroSlider
          slides={SLIDES.map((s, i) => ({
            key: s.image,
            title: s.title,
            text: s.text,
            href: s.href,
            media: <Media src={s.image} alt={s.title} tone={i} dark priority={i === 0} />,
          }))}
        />
        {BLOCKS.map((b, i) =>
          b.kind === 'work' ? (
            <WorkSection key={i} label={b.label} heading={b.heading} rows={b.rows} toneOffset={(tone += 3)} />
          ) : (
            <Feature key={i} slide={b.slide} tone={i} />
          ),
        )}
      </main>
      <SiteFooter />
    </>
  )
}
