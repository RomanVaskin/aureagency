import type { Metadata } from 'next'
import { SiteFooter } from '@/components/site-footer'
import { PageIntro } from '@/components/page-intro'
import { ProjectCard } from '@/components/project-card'
import { ProjectsFilter } from '@/components/projects-filter'
import { findPhoto } from '@/lib/photo'
import { CATEGORIES, PROJECTS } from '@/lib/projects'

const PROJECT_ORDER = [
  'restoran-leningradskaya-oblast',
  'apartamenty-serbiya',
  'rekonstruktsiya-restorana',
  'kvartira-na-patriarshih',
  'dzen-spa',
  'penthaus-vorobevy-gory',
]
const projectRank = new Map(PROJECT_ORDER.map((slug, index) => [slug, index]))

export const metadata: Metadata = {
  title: 'Проекты — EOS Bureau',
  description: 'Коммерческие помещения, частные дома и квартиры — проекты студии EOS Bureau.',
  alternates: { canonical: '/projects' },
}

export default function ProjectsPage() {
  const projectsWithCovers = PROJECTS
    .filter(({ images: [cover] }) => cover && findPhoto(cover.src))
    .sort((a, b) => (projectRank.get(a.slug) ?? PROJECT_ORDER.length) - (projectRank.get(b.slug) ?? PROJECT_ORDER.length))
  const items = projectsWithCovers.map((p, i) => ({
    key: p.slug,
    category: p.category,
    node: <ProjectCard project={p} ratio="4/5" variant={i} priority={i < 3} />,
  }))

  return (
    <>
      <main className="font-primary">
        <PageIntro>
          Создаём пространства, в которых эстетика встречается с функциональностью, а архитектура становится
          продолжением образа жизни.
        </PageIntro>
        <section className="mx-auto max-w-[1600px] px-5 pt-16 md:px-10 md:pt-24">
          <ProjectsFilter categories={CATEGORIES} items={items} />
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
