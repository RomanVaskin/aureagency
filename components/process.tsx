import { ProcessHeading } from './process-heading'
import { InView } from './in-view'
import { Reveal } from './reveal'

const steps = [
  { title: 'Анализ', points: ['Проект', 'Рынок', 'Конкуренты', 'Продажи'] },
  { title: 'Стратегия', points: ['Аудитория', 'Позиционирование', 'Каналы', 'Точки роста'] },
  { title: 'Запуск', points: ['Digital', 'Контент', 'Реклама', 'CRM'] },
  { title: 'Оптимизация', points: ['Данные', 'Аналитика', 'Корректировка', 'Усиление'] },
  { title: 'Масштабирование', points: ['Каналы', 'Бюджет', 'Продажи', 'Рост'] },
]

/**
 * Five-stage timeline. One DOM for both layouts:
 * — mobile: each stage is a 2-column grid, the rail (dot + vertical line) on the left;
 * — md+: five equal grid columns, the rail becomes a row (dot + horizontal line).
 * Each stage's line runs from its dot to the column edge, where the next dot starts,
 * so the line passes through every dot centre without absolute positioning.
 */
export function Process() {
  return (
    <section id="process" className="mx-auto max-w-[1400px] px-5 pt-20 md:px-10 md:pt-28">
      <Reveal>
        <ProcessHeading>
          От анализа проекта
          <br />
          до масштабирования продаж
        </ProcessHeading>
      </Reveal>

      {/* Plays once when ~20% of the timeline is on screen: the line draws stage by
          stage, each dot lands as the line reaches it, then its number, name and
          words follow. Timings come from --i; see .timeline in app/globals.css. */}
      <InView as="ol" threshold={0.2} className="timeline mt-14 grid grid-cols-1 md:mt-20 md:grid-cols-5">
        {steps.map((s, i) => {
          const last = i === steps.length - 1
          return (
            <li key={s.title} style={{ '--i': i } as React.CSSProperties}>
              <div className="grid grid-cols-[12px_minmax(0,1fr)] gap-x-5 md:grid-cols-1 md:gap-x-0">
                <p className="tl-num col-start-2 row-start-1 font-primary text-[15px] font-light leading-6 text-[#222] md:col-start-1 md:mb-4">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <div
                  aria-hidden="true"
                  className="col-start-1 row-span-3 row-start-1 flex flex-col items-center md:row-span-1 md:row-start-2 md:flex-row"
                >
                  <span className="tl-dot mt-1.5 size-3 shrink-0 rounded-full bg-[#111] md:mt-0" />
                  {!last && <span className="tl-line w-px flex-1 bg-black/45 md:h-px md:w-auto" />}
                </div>
                <h3 className="tl-name col-start-2 row-start-2 mt-2 font-primary text-[15px] font-medium uppercase leading-[1.3] tracking-[0.01em] text-[#111] md:col-start-1 md:row-start-3 md:mt-6 md:pr-4 md:text-[13px] lg:text-[15px]">
                  {s.title}
                </h3>
                <ul
                  className={`tl-points col-start-2 row-start-3 mt-3 text-[14px] font-normal leading-[1.55] text-black/48 md:col-start-1 md:row-start-4 md:pr-4 md:pb-0 md:text-[13px] lg:text-[14px] ${last ? '' : 'pb-10'}`}
                >
                  {s.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </li>
          )
        })}
      </InView>
    </section>
  )
}
