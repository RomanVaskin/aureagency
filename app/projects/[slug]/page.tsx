import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ProjectImage } from '@/components/project-image'
import { Reveal } from '@/components/reveal'
import { PROJECTS, categoryLabel, getProject } from '@/lib/projects'

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = getProject((await params).slug)
  if (!p) return {}
  return {
    title: `${p.title} — AURE`,
    description: p.summary,
    alternates: { canonical: `/projects/${p.slug}` },
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProject((await params).slug)
  if (!p) notFound()

  const idx = PROJECTS.indexOf(p)
  const next = PROJECTS[(idx + 1) % PROJECTS.length]
  const [cover, ...gallery] = p.images

  const facts = [
    ['Направление', categoryLabel(p.category)],
    ['Место', p.location],
    ['Год', String(p.year)],
    ['Площадь', p.area],
    ['Статус', p.status],
  ]

  return (
    <>
      <SiteHeader />
      <main className="font-primary">
        <section className="mx-auto max-w-[1600px] px-5 pt-32 md:px-10 md:pt-44">
          <Link href="/projects" className="text-[13px] text-muted-foreground hover:text-foreground">
            ← Проекты
          </Link>
          <h1 className="mt-6 text-[40px] font-light leading-[1.05] tracking-[-0.03em] md:text-[80px]">{p.title}</h1>
          <p className="mt-4 text-[15px] text-muted-foreground">{p.summary}</p>
        </section>

        <section className="mx-auto max-w-[1600px] px-5 pt-12 md:px-10 md:pt-16">
          <ProjectImage {...cover} ratio="16/9" tone={p.tone} variant={idx} priority className="max-md:aspect-[4/5]" />
        </section>

        <section className="mx-auto grid max-w-[1600px] gap-12 px-5 pt-16 md:grid-cols-12 md:gap-8 md:px-10 md:pt-28">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-5 text-[13px] md:col-span-4 md:grid-cols-1">
            {facts.map(([k, v]) => (
              <div key={k}>
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="mt-1">{v}</dd>
              </div>
            ))}
            <div className="col-span-2 md:col-span-1">
              <dt className="text-muted-foreground">Материалы</dt>
              <dd className="mt-1">{p.materials.join(', ')}</dd>
            </div>
          </dl>
          <div className="space-y-6 text-[18px] font-light leading-[1.55] md:col-span-7 md:col-start-6 md:text-[22px]">
            {p.description.map((t) => (
              <p key={t.slice(0, 24)}>{t}</p>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-[1600px] gap-6 px-5 pt-20 md:grid-cols-12 md:gap-8 md:px-10 md:pt-36">
          {gallery.map((im, i) => {
            // Широкие кадры — на всю ширину, вертикальные — со сдвигом то вправо, то к центру.
            const portrait = gallery.slice(0, i).filter((g) => g.ratio === '4/5').length
            const cls =
              im.ratio !== '4/5'
                ? 'md:col-span-12'
                : portrait % 2 === 0
                  ? 'md:col-span-6 md:col-start-4'
                  : 'md:col-span-5 md:col-start-8'
            return (
              <Reveal key={im.src} className={cls}>
                <ProjectImage {...im} tone={(p.tone + i + 1) % 4} variant={idx + i + 1} />
                <p className="mt-3 text-[13px] text-muted-foreground">{im.alt}</p>
              </Reveal>
            )
          })}
        </section>

        <section className="mx-auto max-w-[1600px] px-5 pt-28 md:px-10 md:pt-48">
          <Link href={`/projects/${next.slug}`} className="group block border-t border-border pt-8">
            <span className="text-[13px] text-muted-foreground">Следующий проект</span>
            <span className="mt-3 block text-[32px] font-light tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-2 md:text-[56px]">
              {next.title} →
            </span>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
