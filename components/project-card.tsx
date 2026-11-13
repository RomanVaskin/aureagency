import Link from 'next/link'
import { ProjectImage } from './project-image'
import type { Project, Ratio } from '@/lib/projects'

/** Карточка проекта: кадр и подпись в одну строку — название слева, место и год справа. */
export function ProjectCard({
  project,
  ratio,
  variant = 0,
  priority = false,
}: {
  project: Project
  ratio?: Ratio
  variant?: number
  priority?: boolean
}) {
  const cover = project.images[0]
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <ProjectImage
        src={cover.src}
        alt={cover.alt}
        ratio={ratio ?? cover.ratio}
        tone={project.tone}
        variant={variant}
        priority={priority}
        imgClassName="transition-[opacity,transform] duration-700 ease-out group-hover:scale-[1.015] group-hover:opacity-90"
      />
      <div className="tp-caption mt-3 flex items-baseline justify-between gap-4 text-[13px] leading-snug">
        <span className="tp-caption-strong underline-offset-4 group-hover:underline">{project.title}</span>
        <span className="shrink-0 text-muted-foreground">
          {project.location.split(',')[0]}, {project.year}
        </span>
      </div>
    </Link>
  )
}
