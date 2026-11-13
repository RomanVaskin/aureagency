import { Reveal } from './reveal'

/**
 * Directions 01–06, closing the Система page. Each carries an anchor so other pages
 * can link straight to it (ids must not clash with the page's own sections).
 */
const directions = [
  { id: 'strategy', title: 'Стратегия и позиционирование' },
  { id: 'branding', title: 'Брендинг и упаковка проекта' },
  { id: 'digital-infrastructure', title: 'Сайт и digital-инфраструктура' },
  { id: 'client-acquisition', title: 'Продвижение и привлечение клиентов' },
  { id: 'content', title: 'Контент и визуальные коммуникации' },
  { id: 'sales', title: 'Система продаж' },
]

export function ServicesList() {
  return (
    <section id="services-list" className="mx-auto max-w-[1400px] px-5 pb-24 pt-20 md:px-10 md:pb-32 md:pt-28">
      <ol className="border-t border-border">
        {directions.map(({ id, title }, i) => (
          <li key={id} id={id} className="scroll-mt-24">
            <Reveal index={i}>
              <div className="grid grid-cols-[45px_1fr] items-center gap-x-3 border-b border-border py-[26px] md:grid-cols-[96px_1fr] md:gap-x-10 md:py-[34px] lg:grid-cols-[180px_1fr]">
                <span className="font-primary text-[13px] font-normal tracking-[0.18em] text-muted-foreground">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="font-primary text-[20px] font-light leading-[1.15] tracking-[-0.015em] text-[#161616] md:text-[length:clamp(22px,1.9vw,26px)]">
                  {title}
                </h2>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
