import { Media } from './media'
import type { Card } from '@/lib/home'

/**
 * Блок ленты: необязательный заголовок по центру, вертикальная подпись у левого и
 * правого края (липнет к середине экрана, пока блок на экране) и ряды карточек
 * в одну строку. Сетка — 4 колонки: широкая карточка занимает 2, узкая 1,
 * высота кадров в ряду одинаковая.
 */
export function WorkSection({
  label,
  heading,
  rows,
  toneOffset = 0,
}: {
  label: string
  heading?: string
  rows: Card[][]
  toneOffset?: number
}) {
  let t = toneOffset
  return (
    <section data-header="dark" className="relative px-5 py-20 md:px-[5.4vw] md:py-28">
      <SideLabel text={label} side="left" />
      <SideLabel text={label} side="right" />

      {heading && (
        <h2 className="mb-14 text-center font-serif text-[18px] uppercase tracking-[0.5em] md:mb-24 md:text-[22px]">
          {heading}
        </h2>
      )}

      <div className="space-y-16 md:space-y-24">
        {rows.map((row, r) => (
          <div key={r} className="grid gap-y-14 md:grid-cols-4 md:gap-x-[1.3vw]">
            {row.map((c) => (
              <ProjectTile key={c.image} card={c} tone={t++} />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

function ProjectTile({ card, tone }: { card: Card; tone: number }) {
  const wide = card.span === 2
  return (
    <article className={wide ? 'md:col-span-2' : 'md:col-span-1'}>
      <a href={card.href} className="group block">
        {/* ширина узкой колонки : высота ряда = 426 : 585 (как в образце) */}
        <div className={`relative overflow-hidden ${wide ? 'aspect-[3/2] md:aspect-[879/585]' : 'aspect-[4/5] md:aspect-[426/585]'}`}>
          <Media src={card.image} alt={card.title} tone={tone} className="transition-transform duration-[900ms] ease-out group-hover:scale-[1.02]" />
        </div>
        <h3 className="mt-8 font-serif text-[17px] uppercase leading-snug tracking-[0.4em] md:mt-10 md:text-[19px]">
          {card.title}
        </h3>
      </a>
      {card.text && (
        <p className={`mt-5 text-[15px] leading-[1.65] tracking-[0.02em] text-foreground/75 ${wide ? '' : 'line-clamp-5'}`}>
          {card.text}
        </p>
      )}
      <p className="mt-6 text-[12px] uppercase tracking-[0.16em] text-muted-foreground">
        {card.meta.map((m, k) => (
          <span key={k}>
            {k > 0 && <span className="mx-3">|</span>}
            {m}
          </span>
        ))}
      </p>
    </article>
  )
}

/** Вертикальная подпись из букв друг под другом у края экрана. */
function SideLabel({ text, side }: { text: string; side: 'left' | 'right' }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-y-0 hidden w-[5.4vw] overflow-clip md:block ${side === 'left' ? 'left-0' : 'right-0'}`}
    >
      <div className="sticky top-0 flex h-[100svh] flex-col items-center justify-center font-serif text-[14px] leading-[2.15]">
        {[...text].map((ch, i) => (
          <span key={i}>{ch === ' ' ? ' ' : ch}</span>
        ))}
      </div>
    </div>
  )
}
