import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ProjectCard } from '@/components/project-card'
import { ProjectsFilter } from '@/components/projects-filter'
import { CATEGORIES, PROJECTS } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Проекты — AURE',
  description: 'Коммерческие помещения, частные дома и квартиры — проекты студии AURE.',
  alternates: { canonical: '/projects' },
}

export default function ProjectsPage() {
  const categories = CATEGORIES.map((c) => ({ ...c, count: PROJECTS.filter((p) => p.category === c.id).length }))
  const items = PROJECTS.map((p, i) => ({
    key: p.slug,
    category: p.category,
    node: <ProjectCard project={p} ratio="4/5" variant={i} priority={i < 3} />,
  }))

  return (
    <div className="type-projects">
      <SiteHeader wordmark />
      <main className="font-primary">
        {/* Те же отступы, что у PageIntro; «Проекты» — заголовок, фраза — описание под ним */}
        <section className="mx-auto max-w-[1600px] px-5 pt-32 md:px-10 md:pt-44">
          <h1 className="tp-title">Проекты</h1>
          <p className="tp-lead mt-6 max-w-[1100px]">
            Создаём пространства, в которых эстетика встречается с функциональностью, а архитектура становится
            продолжением образа жизни.
          </p>
        </section>
        <section className="mx-auto max-w-[1600px] px-5 pt-16 md:px-10 md:pt-24">
          <ProjectsFilter categories={categories} items={items} />
        </section>
      </main>
      <SiteFooter wordmark />
    </div>
  )
}
