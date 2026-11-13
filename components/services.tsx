import { SectionLabel } from './section-label'
import { Reveal } from './reveal'

const services = [
  {
    title: 'Стратегия и упаковка',
    text: 'Анализ проекта, рынка и конкурентов. Позиционирование, предложение и стратегия продвижения.',
  },
  {
    title: 'Сайты и лендинги',
    text: 'Современные сайты посёлков, домов и строительных компаний, ориентированные на обращения.',
  },
  {
    title: 'Аналитика и автоматизация',
    text: 'Отслеживание источников, заявок и движения клиента от первого визита до продажи.',
  },
]

export function Services() {
  return (
    <section id="services" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <Reveal>
          <SectionLabel>Практика</SectionLabel>
          <h2 className="mt-6 font-primary text-[length:min(calc((100vw_-_2.5rem)/15.5),24px)] font-light leading-[1.1] tracking-display text-[#161616] min-[360px]:whitespace-nowrap md:text-[length:min(calc((100vw_-_5rem)/16.5),34px)] lg:text-[length:clamp(34px,3.2vw,52px)]">
            От позиционирования до
            <br />
            привлечения покупателей
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 items-stretch border-l border-t border-border md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} index={i} className="h-full">
              <div className="group h-full border-b border-r border-border bg-background p-8 transition-colors hover:bg-secondary md:px-5 md:py-8 lg:px-10 lg:py-12">
                {/* One size for all three titles, derived from the column's inner width so the
                    longest one (≈13.2em) stays on a single line from tablet up. */}
                <h3 className="text-xl font-primary font-light leading-[1.2] tracking-[-0.01em] text-[#161616] md:whitespace-nowrap md:text-[length:calc(((100vw_-_80px)/3_-_40px)/13.6)] lg:text-[length:min(28px,calc(((min(100vw,1400px)_-_80px)/3_-_80px)/13.6))]">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
