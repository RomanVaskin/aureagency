import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ProjectImage } from '@/components/project-image'
import { ProjectCard } from '@/components/project-card'
import { Reveal } from '@/components/reveal'
import { CATEGORIES, FEATURED, PROJECTS, SITE_IMAGES, getProject } from '@/lib/projects'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

/** Асимметричная сетка избранных проектов: размер и смещение каждой карточки. */
const LAYOUT = [
  { cls: 'md:col-span-7', ratio: '4/5' as const },
  { cls: 'md:col-span-4 md:col-start-9 md:mt-48', ratio: '4/5' as const },
  { cls: 'md:col-span-8 md:col-start-3', ratio: '3/2' as const },
  { cls: 'md:col-span-5', ratio: '4/5' as const },
  { cls: 'md:col-span-6 md:col-start-7 md:mt-32', ratio: '3/2' as const },
  { cls: 'md:col-span-7 md:col-start-4', ratio: '3/2' as const },
]

const PRINCIPLES = [
  {
    title: 'Простота',
    text: 'Убираем лишнее, пока не останется главное. Каждый предмет в комнате должен быть нужен или любим.',
  },
  {
    title: 'Материал',
    text: 'Дерево, камень, лён, известь. Натуральные материалы красиво стареют и делают дом тёплым на ощупь.',
  },
  {
    title: 'Свет',
    text: 'Начинаем проект с того, как в комнату попадает дневной свет, и строим вечерний сценарий вокруг человека.',
  },
]

export default function Page() {
  const hero = getProject('dom-u-sosen')!
  const featured = FEATURED.map((s) => getProject(s)!).filter(Boolean)

  return (
    <>
      <SiteHeader />
      <main className="font-primary">
        {/* Главный кадр */}
        <section className="px-5 pt-16 md:px-10 md:pt-20">
          <div className="mx-auto max-w-[1600px]">
            <ProjectImage {...SITE_IMAGES.hero} tone={1} variant={0} priority className="h-[70vh] md:h-[82vh]" fill />
            <div className="mt-3 flex justify-between text-[13px]">
              <Link href={`/projects/${hero.slug}`} className="underline-offset-4 hover:underline">
                {hero.title}
              </Link>
              <span className="text-muted-foreground">
                {hero.location.split(',')[0]}, {hero.year}
              </span>
            </div>
          </div>
        </section>

        {/* Манифест */}
        <section className="mx-auto max-w-[1600px] px-5 pt-28 md:px-10 md:pt-44">
          <Reveal>
            <p className="max-w-[1150px] text-[28px] font-light leading-[1.2] tracking-[-0.02em] md:text-[48px]">
              AURE — студия архитектуры и дизайна интерьера. Мы создаём тихие пространства, в которых хочется
              жить медленнее: честные формы, натуральные материалы и много света.
            </p>
            <Link href="/studio" className="mt-10 inline-block text-[13px] underline underline-offset-4 hover:text-muted-foreground">
              О студии
            </Link>
          </Reveal>
        </section>

        {/* Избранные проекты */}
        <section className="mx-auto max-w-[1600px] px-5 pt-28 md:px-10 md:pt-44">
          <div className="flex items-baseline justify-between text-[13px]">
            <h2 className="text-muted-foreground">Избранные проекты</h2>
            <Link href="/projects" className="underline underline-offset-4 hover:text-muted-foreground">
              Все проекты ({PROJECTS.length})
            </Link>
          </div>
          <div className="mt-10 grid gap-y-16 md:grid-cols-12 md:gap-x-8 md:gap-y-28">
            {featured.map((p, i) => (
              <Reveal key={p.slug} className={LAYOUT[i % LAYOUT.length].cls}>
                <ProjectCard project={p} ratio={LAYOUT[i % LAYOUT.length].ratio} variant={i} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Принципы */}
        <section className="mx-auto max-w-[1600px] px-5 pt-28 md:px-10 md:pt-48">
          <h2 className="text-[13px] text-muted-foreground">Подход</h2>
          <div className="mt-10 grid gap-12 border-t border-border pt-10 md:grid-cols-3 md:gap-8">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.title} index={i}>
                <h3 className="text-[22px] font-light tracking-[-0.01em]">{p.title}</h3>
                <p className="mt-4 max-w-[380px] text-[15px] leading-relaxed text-muted-foreground">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Направления */}
        <section className="mx-auto max-w-[1600px] px-5 pt-28 md:px-10 md:pt-48">
          <h2 className="text-[13px] text-muted-foreground">Направления</h2>
          <ul className="mt-10 border-t border-border">
            {CATEGORIES.map((c) => {
              const n = PROJECTS.filter((p) => p.category === c.id).length
              return (
                <li key={c.id} className="border-b border-border">
                  <Link
                    href={`/projects?category=${c.id}`}
                    className="group flex items-baseline justify-between py-6 md:py-8"
                  >
                    <span className="text-[26px] font-light tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-2 md:text-[40px]">
                      {c.label}
                    </span>
                    <span className="text-[13px] text-muted-foreground">{n}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>

        {/* Студия */}
        <section className="mx-auto grid max-w-[1600px] gap-10 px-5 pt-28 md:grid-cols-12 md:gap-8 md:px-10 md:pt-48">
          <Reveal className="md:col-span-7">
            <ProjectImage {...SITE_IMAGES.studio} tone={2} variant={3} />
          </Reveal>
          <Reveal className="flex flex-col justify-end md:col-span-4 md:col-start-9" index={1}>
            <p className="text-[13px] text-muted-foreground">Студия</p>
            <p className="mt-6 text-[22px] font-light leading-snug tracking-[-0.01em] md:text-[26px]">
              Ведём проект от первой встречи до последней вазы на полке: архитектура, интерьер, мебель на заказ,
              комплектация и авторский надзор.
            </p>
            <Link
              href="/contact"
              className="mt-10 self-start rounded-full bg-foreground px-7 py-3 text-[13px] text-background transition-opacity hover:opacity-80"
            >
              Обсудить проект
            </Link>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
