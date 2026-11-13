import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageIntro } from '@/components/page-intro'
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
    <>
      <SiteHeader />
      <main className="font-primary">
        {/* Как на «Услугах»: без подписи, фраза — заголовок, две строки от планшета */}
        <PageIntro titleClassName="text-[21px] leading-[1.25] md:text-[30px] md:leading-[1.2] lg:text-[36px] xl:text-[44px] xl:leading-[1.15]">
          Создаём пространства, в которых эстетика встречается с функциональностью, а архитектура становится
          продолжением образа жизни.
        </PageIntro>
        <section className="mx-auto max-w-[1600px] px-5 pt-16 md:px-10 md:pt-24">
          <ProjectsFilter categories={categories} items={items} />
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
