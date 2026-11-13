'use client'

import Image from 'next/image'
import { SectionLabel } from './section-label'
import { Reveal } from './reveal'
import { useParallax } from '@/lib/use-parallax'

const projects = [
  {
    title: 'Коттеджный посёлок',
    text: 'Комплексное продвижение проекта и продаж участков.',
    img: '/project-settlement.png',
    alt: 'Генплан современного коттеджного посёлка с высоты',
  },
  {
    title: 'Загородный девелопмент',
    text: 'Позиционирование, digital-инфраструктура и привлечение покупателей.',
    img: '/project-development.png',
    alt: 'Современная малоэтажная жилая застройка',
  },
  {
    title: 'Продажа домов',
    text: 'Сайт, контент, SEO и реклама.',
    img: '/project-house.png',
    alt: 'Современный загородный дом в вечернем свете',
  },
]

function ProjectImage({ src, alt, parallax }: { src: string; alt: string; parallax?: boolean }) {
  const parallaxRef = useParallax<HTMLDivElement>(0.08, 14)

  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <div ref={parallax ? parallaxRef : undefined}>
        <Image
          src={src || '/placeholder.svg'}
          alt={alt}
          width={800}
          height={1000}
          className={`h-72 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] md:h-96 ${
            parallax ? 'scale-110' : ''
          }`}
        />
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <Reveal>
          <SectionLabel>Проекты</SectionLabel>
          <h2 className="mt-6 max-w-5xl font-primary text-balance text-[length:min(calc((100vw_-_2.5rem)/15.5),24px)] font-light leading-[1.1] tracking-display text-[#161616] md:text-[length:min(calc((100vw_-_5rem)/16.5),34px)] lg:text-[length:clamp(34px,3.2vw,52px)]">
            Загородная недвижимость требует своего подхода
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} index={i}>
              <article className="group flex flex-col">
                <ProjectImage src={p.img} alt={p.alt} parallax={i === 0} />
                <h3 className="mt-6 text-xl font-primary font-light leading-[1.25] tracking-subheading text-[#161616] md:text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
