import { SectionLabel } from './section-label'
import { Reveal } from './reveal'

const tools = [
  {
    title: 'Интерактивный генплан',
    text: 'Показывает свободные, забронированные и проданные участки.',
    visual: 'plan',
  },
  {
    title: 'Каталог домов и участков',
    text: 'Отдельные страницы объектов с характеристиками, ценой и визуальными материалами.',
    visual: 'catalog',
  },
  {
    title: 'Подбор объекта',
    text: 'Помогает посетителю быстро найти подходящий дом или участок.',
    visual: 'filter',
  },
  {
    title: 'Квизы и формы',
    text: 'Собирают необходимые данные без длинных и сложных сценариев.',
    visual: 'form',
  },
  {
    title: 'AI-консультант',
    text: 'Отвечает на вопросы о проекте и помогает квалифицировать интерес покупателя.',
    visual: 'chat',
  },
  {
    title: 'Аналитика',
    text: 'Показывает, откуда пришёл клиент и какие каналы действительно влияют на продажи.',
    visual: 'analytics',
  },
]

function Visual({ type }: { type: string }) {
  const base = 'text-muted-foreground/60'
  switch (type) {
    case 'plan':
      return (
        <div className="grid grid-cols-6 gap-1">
          {Array.from({ length: 18 }).map((_, i) => (
            <span
              key={i}
              className={`aspect-square rounded-[2px] border border-border ${
                i % 5 === 0 ? 'bg-foreground' : i % 3 === 0 ? 'bg-muted-foreground/25' : ''
              }`}
            />
          ))}
        </div>
      )
    case 'catalog':
      return (
        <div className="space-y-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="h-8 w-10 rounded-[3px] bg-muted-foreground/15" />
              <span className="h-2 flex-1 rounded-full bg-border" />
              <span className="h-2 w-8 rounded-full bg-foreground/70" />
            </div>
          ))}
        </div>
      )
    case 'filter':
      return (
        <div className="flex flex-wrap gap-2">
          {['до 150 м²', 'у леса', '2 этажа', 'участок 10', 'с террасой'].map((t) => (
            <span
              key={t}
              className="rounded-full border border-border px-3 py-1 font-primary text-[10px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      )
    case 'form':
      return (
        <div className="space-y-2">
          <span className="block h-7 rounded-[3px] border border-border" />
          <span className="block h-7 w-2/3 rounded-[3px] border border-border" />
          <span className="mt-1 block h-7 w-24 rounded-full bg-foreground" />
        </div>
      )
    case 'chat':
      return (
        <div className="space-y-2">
          <span className="block h-6 w-3/4 rounded-lg rounded-tl-none bg-muted-foreground/15" />
          <span className="ml-auto block h-6 w-2/3 rounded-lg rounded-tr-none bg-foreground/80" />
          <span className="block h-6 w-1/2 rounded-lg rounded-tl-none bg-muted-foreground/15" />
        </div>
      )
    case 'analytics':
      return (
        <div className="flex h-16 items-end gap-1.5">
          {[30, 55, 40, 70, 60, 90, 75].map((h, i) => (
            <span
              key={i}
              style={{ height: `${h}%` }}
              className={`w-full rounded-[2px] ${i === 5 ? 'bg-foreground' : 'bg-muted-foreground/25'}`}
            />
          ))}
        </div>
      )
    default:
      return <div className={base} />
  }
}

export function Digital() {
  return (
    <section id="digital" className="border-t border-border">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <Reveal>
          <SectionLabel>Digital</SectionLabel>
          <h2 className="mt-6 max-w-5xl font-primary text-balance text-[length:min(calc((100vw_-_2.5rem)/15.5),24px)] font-light leading-[1.1] tracking-display text-[#161616] md:text-[length:min(calc((100vw_-_5rem)/16.5),34px)] lg:text-[length:clamp(34px,3.2vw,52px)]">
            Цифровая инфраструктура продаж
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Для загородной недвижимости сайт может делать значительно больше, чем просто показывать
            фотографии проекта.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t, i) => (
            <Reveal key={t.title} index={i}>
              <div className="flex flex-col bg-background p-8 md:p-9">
                <div className="flex h-24 items-center">
                  <div className="w-full max-w-[220px]">
                    <Visual type={t.visual} />
                  </div>
                </div>
                <h3 className="mt-6 text-lg font-primary font-light leading-[1.25] tracking-subheading text-[#161616]">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
