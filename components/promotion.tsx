import { SectionLabel } from './section-label'
import { Reveal } from './reveal'

const services = [
  {
    title: 'SEO',
    text: 'Поисковая структура, посадочные страницы, контент и системное развитие органического трафика.',
  },
  {
    title: 'Реклама',
    text: 'Яндекс Директ, ретаргетинг и работа с целевой аудиторией.',
  },
  {
    title: 'Контент',
    text: 'Фото, видео, статьи, социальные сети и материалы, которые помогают покупателю принять решение.',
  },
]

export function Promotion() {
  return (
    <section id="promotion" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-24 md:px-10 md:pb-24 md:pt-32">
        <Reveal>
          <SectionLabel>Продвижение</SectionLabel>
          <h2 className="mt-6 max-w-5xl font-primary text-balance text-[length:min(calc((100vw_-_2.5rem)/15.5),24px)] font-light leading-[1.1] tracking-display text-[#161616] md:text-[length:min(calc((100vw_-_5rem)/16.5),34px)] lg:text-[length:clamp(34px,3.2vw,52px)]">
            Трафик, который приводит к сделке
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 border-l border-t border-border sm:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} index={i} className="h-full">
              <div className="group h-full border-b border-r border-border bg-background p-8 transition-colors hover:bg-secondary md:p-10">
                <h3 className="text-xl font-primary font-light leading-[1.25] tracking-subheading text-[#161616] md:text-[1.35rem]">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
