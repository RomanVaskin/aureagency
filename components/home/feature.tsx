import { Media } from './media'
import type { Slide } from '@/lib/home'

/** Полноэкранный кадр между блоками ленты: название и описание по центру внизу. */
export function Feature({ slide, tone = 0 }: { slide: Slide; tone?: number }) {
  return (
    <section data-header="light" className="relative h-[100svh] min-h-[520px] w-full overflow-hidden text-white">
      <Media src={slide.image} alt={slide.title} tone={tone} dark />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-[8vh] mx-auto max-w-[900px] px-6 text-center">
        <a href={slide.href} className="font-serif text-[18px] uppercase tracking-[0.5em] md:text-[22px]">
          {slide.title}
        </a>
        <p className="mt-6 hidden text-[14px] leading-[1.7] tracking-[0.04em] text-white/90 md:block">{slide.text}</p>
      </div>
    </section>
  )
}
