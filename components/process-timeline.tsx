import type { CSSProperties } from 'react'
import { InView } from './in-view'
import { Reveal } from './reveal'

/**
 * Этапы работы линией, как на aureagency.ru/process. Когда линия попадает на экран,
 * она прорисовывается от точки к точке, а номер, название и описание этапа
 * появляются следом (анимация — .timeline в app/globals.css; при «уменьшить
 * движение» всё видно сразу). На телефоне линия вертикальная, с md — горизонтальная.
 */
const COLS: Record<number, string> = { 3: 'md:grid-cols-3', 4: 'md:grid-cols-4', 5: 'md:grid-cols-5' }

export function ProcessTimeline({
  label,
  heading,
  steps,
}: {
  label: string
  heading: React.ReactNode
  steps: { title: string; text: string }[]
}) {
  return (
    <section className="mx-auto max-w-[1600px] px-5 pt-28 md:px-10 md:pt-48">
      <Reveal>
        <h2 className="text-[13px] text-muted-foreground">{label}</h2>
        <p className="mt-6 max-w-[1100px] text-[26px] font-light leading-[1.2] tracking-[-0.02em] md:text-[52px] md:leading-[1.15]">
          {heading}
        </p>
      </Reveal>

      <InView
        as="ol"
        threshold={0.2}
        className={`timeline mt-14 grid grid-cols-1 md:mt-24 ${COLS[steps.length] ?? 'md:grid-cols-4'}`}
      >
        {steps.map((s, i) => {
          const last = i === steps.length - 1
          return (
            <li key={s.title} style={{ '--i': i } as CSSProperties}>
              <div className="grid grid-cols-[12px_minmax(0,1fr)] gap-x-5 md:grid-cols-1 md:gap-x-0">
                <p className="tl-num col-start-2 row-start-1 text-[15px] font-light leading-6 md:col-start-1 md:mb-4">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <div
                  aria-hidden="true"
                  className="col-start-1 row-span-3 row-start-1 flex flex-col items-center md:row-span-1 md:row-start-2 md:flex-row"
                >
                  <span className="tl-dot mt-1.5 size-3 shrink-0 rounded-full bg-foreground md:mt-0" />
                  {!last && <span className="tl-line w-px flex-1 bg-foreground/45 md:h-px md:w-auto" />}
                </div>
                <h3 className="tl-name col-start-2 row-start-2 mt-2 text-[15px] font-medium uppercase leading-[1.3] tracking-[0.04em] md:col-start-1 md:row-start-3 md:mt-6 md:pr-8">
                  {s.title}
                </h3>
                <p
                  className={`tl-points col-start-2 row-start-3 mt-3 max-w-[340px] text-[15px] leading-[1.55] text-muted-foreground md:col-start-1 md:row-start-4 md:pr-8 md:pb-0 ${last ? '' : 'pb-10'}`}
                >
                  {s.text}
                </p>
              </div>
            </li>
          )
        })}
      </InView>
    </section>
  )
}
