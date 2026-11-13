'use client'

import { useEffect, useState, type ReactNode } from 'react'
import type { Category } from '@/lib/projects'

/**
 * Фильтр по направлениям. Карточки рендерит сервер (ему нужны файлы из public/),
 * здесь только выбираем, какие показать. ?category=houses в адресе выбирает фильтр сразу.
 */
export function ProjectsFilter({
  categories,
  items,
}: {
  categories: { id: Category; label: string; count: number }[]
  items: { key: string; category: Category; node: ReactNode }[]
}) {
  const [active, setActive] = useState<Category | 'all'>('all')

  useEffect(() => {
    const c = new URLSearchParams(window.location.search).get('category')
    if (c && categories.some((x) => x.id === c)) setActive(c as Category)
  }, [categories])

  const select = (c: Category | 'all') => {
    setActive(c)
    const url = c === 'all' ? '/projects' : `/projects?category=${c}`
    window.history.replaceState(null, '', url)
  }

  const shown = items.filter((i) => active === 'all' || i.category === active)

  const btn = (id: Category | 'all', label: string, count: number) => (
    <button
      key={id}
      type="button"
      onClick={() => select(id)}
      aria-pressed={active === id}
      className={`transition-colors hover:text-foreground ${active === id ? 'text-foreground' : 'text-muted-foreground'}`}
    >
      {label}
      <sup className="ml-0.5 text-[10px]">{count}</sup>
    </button>
  )

  return (
    <>
      <div className="tp-caption flex flex-wrap gap-x-7 gap-y-2 text-[13px] tracking-[0.02em]">
        {btn('all', 'Все', items.length)}
        {categories.map((c) => btn(c.id, c.label, c.count))}
      </div>

      <div className="mt-12 grid gap-x-6 gap-y-14 sm:grid-cols-2 md:mt-16 md:gap-x-8 md:gap-y-20 lg:grid-cols-3">
        {shown.map((i) => (
          <div key={i.key} className="fade-up">
            {i.node}
          </div>
        ))}
      </div>
    </>
  )
}
