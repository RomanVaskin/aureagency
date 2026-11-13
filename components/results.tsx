import { ProcessHeading } from './process-heading'
import { Reveal } from './reveal'

const flow = [
  { title: 'Целевые обращения', text: 'Привлекаем релевантную аудиторию' },
  { title: 'Показы объектов', text: 'Организуем и сопровождаем показы' },
  { title: 'Бронирования', text: 'Работаем с интересом и помогаем принять решение' },
  { title: 'Сделки', text: 'Доводим до результата' },
]

/** Thin right-pointing arrow: a hairline plus a small open chevron. */
function ArrowRight() {
  return (
    <span aria-hidden="true" className="flex flex-1 items-center text-black/35">
      <span className="h-px flex-1 bg-current" />
      <svg viewBox="0 0 6 10" className="-ml-px h-2.5 w-1.5" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M0.5 0.5 5 5 0.5 9.5" />
      </svg>
    </span>
  )
}

/** Thin downward arrow for the stacked mobile layout. */
function ArrowDown() {
  return (
    <span aria-hidden="true" className="mt-6 flex h-8 w-2.5 flex-col items-center text-black/35 md:hidden">
      <span className="w-px flex-1 bg-current" />
      <svg viewBox="0 0 10 6" className="-mt-px h-1.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M0.5 0.5 5 5 9.5 0.5" />
      </svg>
    </span>
  )
}

export function Results() {
  return (
    <section id="results" className="mx-auto max-w-[1400px] px-5 pb-20 md:px-10 md:pb-24">
      <div className="mt-20 border-t border-black/18 pt-20 md:mt-28 md:pt-28">
        <Reveal>
          <ProcessHeading>
            Считаем не показы.
            <br />
            Считаем движение к сделке.
          </ProcessHeading>
          <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:mt-10 md:text-lg">
            Маркетинг оценивается не количеством трафика, а его вкладом в продажи проекта.
          </p>
        </Reveal>

        <ol className="mt-14 grid grid-cols-1 gap-y-6 md:mt-20 md:grid-cols-4 md:gap-x-8 md:gap-y-0 lg:gap-x-12">
          {flow.map((step, i) => {
            const last = i === flow.length - 1
            return (
              <li key={step.title}>
                <Reveal index={i}>
                  <div className="flex items-center gap-4">
                    <span className="font-primary text-[32px] font-light leading-none tracking-[-0.02em] text-[#111] md:text-[34px] lg:text-[36px]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {!last && (
                      <span className="hidden flex-1 md:flex">
                        <ArrowRight />
                      </span>
                    )}
                  </div>
                  <h3 className="mt-5 font-primary text-[21px] font-light leading-[1.1] tracking-[-0.01em] text-[#111] md:mt-6 md:text-[22px] lg:text-[24px]">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[260px] text-[14px] font-normal leading-[1.45] text-black/48">
                    {step.text}
                  </p>
                  {!last && <ArrowDown />}
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
