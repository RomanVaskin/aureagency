import { SectionLabel } from './section-label'
import { Reveal } from './reveal'

const blocks = [
  {
    title: 'Коттеджные посёлки',
    text: 'Запуск и системное продвижение проектов от первых продаж до масштабирования.',
  },
  {
    title: 'Девелоперы',
    text: 'Маркетинг жилых проектов, земельных активов и новых территорий.',
  },
  {
    title: 'Строительные компании',
    text: 'Привлечение клиентов на строительство и продажу готовых домов.',
  },
]

export function Audience() {
  return (
    <section id="audience" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
      <Reveal>
        <SectionLabel>Для кого</SectionLabel>
        <h2 className="mt-6 font-primary text-[length:min(calc((100vw_-_2.5rem)/15.5),24px)] font-light leading-[1.1] tracking-display text-[#161616] min-[360px]:whitespace-nowrap md:text-[length:min(calc((100vw_-_5rem)/16.5),34px)] lg:text-[length:clamp(34px,3.2vw,52px)]">
          Работаем с проектами
          <br />
          загородной недвижимости
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-px border-t border-border md:grid-cols-3 md:border-t-0">
        {blocks.map((b, i) => (
          <Reveal key={b.title} index={i}>
            <div className="border-t border-border py-8 md:border-l md:border-t-0 md:py-0 md:pl-8 md:pr-6 first:md:border-l-0">
              <h3 className="text-xl font-primary font-light leading-[1.25] tracking-subheading text-[#161616] md:text-2xl">{b.title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{b.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
