import { SectionLabel } from './section-label'
import { Reveal } from './reveal'

const flow = ['Продукт', 'Упаковка', 'Сайт', 'Трафик', 'Лид', 'Продажа']

export function MarketingSystem() {
  return (
    <section id="system" className="mx-auto max-w-[1400px] px-5 pb-[72px] pt-24 md:px-10 md:pb-20 md:pt-32">
      <Reveal>
        <SectionLabel>Система</SectionLabel>

        <h2 className="mt-8 font-primary text-[length:min(calc((100vw_-_2.5rem)/15.5),24px)] font-light leading-[1.1] tracking-display text-[#161616] min-[360px]:whitespace-nowrap md:text-[length:min(calc((100vw_-_5rem)/16.5),34px)] lg:text-[length:clamp(34px,3.2vw,52px)]">
          Маркетинг должен
          <br className="md:hidden" /> приводить
          <br className="hidden md:inline" /> не клики,
          <br className="md:hidden" /> а покупателей
        </h2>
      </Reveal>

      <Reveal className="mt-16 overflow-hidden rounded-lg border border-border">
        <div className="flex flex-col divide-y divide-border md:flex-row md:divide-x md:divide-y-0">
          {flow.map((step) => (
            <div
              key={step}
              className="flex flex-1 items-center px-6 py-7 md:py-10"
            >
              <span className="text-base font-medium uppercase tracking-ui md:text-lg">
                {step}
              </span>
            </div>
          ))}
        </div>
        <div className="h-1 aure-gradient" aria-hidden="true" />
      </Reveal>

      <p className="mt-10 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
        Мы рассматриваем продвижение как единую систему. Реклама не работает отдельно от продукта,
        сайта, контента и отдела продаж.
      </p>

      <a
        href="/system"
        className="mt-6 inline-flex items-center gap-2 text-sm font-normal tracking-ui text-foreground transition-opacity hover:opacity-70"
      >
        Подробнее о системе →
      </a>
    </section>
  )
}
