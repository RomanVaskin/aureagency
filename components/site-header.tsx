'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Logo } from './logo'

export const NAV = [
  { label: 'Главная', href: '/' },
  { label: 'Проекты', href: '/projects' },
  { label: 'Услуги', href: '/services' },
  { label: 'Контакты', href: '/contact' },
]

/**
 * Шапка как в образце: логотип слева, меню капслоком по центру, поиск справа.
 * Прозрачная и белая над полноэкранными кадрами (секции с data-header="light"),
 * тёмная на кремовом фоне. При прокрутке вниз прячется, при прокрутке вверх
 * появляется снова — уже на кремовой подложке, если под ней не фото.
 * overlay — страница начинается с полноэкранного кадра (главная).
 */
export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const pathname = usePathname()
  const [onImage, setOnImage] = useState(overlay)
  const [hidden, setHidden] = useState(false)
  const [atTop, setAtTop] = useState(true)
  const [open, setOpen] = useState(false)

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    let lastY = window.scrollY
    let raf = 0
    const update = () => {
      raf = 0
      const y = window.scrollY
      setAtTop(y < 10)
      if (Math.abs(y - lastY) > 4) {
        setHidden(y > lastY && y > 120)
        lastY = y
      }
      // что сейчас под шапкой
      const el = document.elementsFromPoint(window.innerWidth / 2, 40).find((n) => n.closest('[data-header]'))
      setOnImage(el?.closest('[data-header]')?.getAttribute('data-header') === 'light')
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [pathname])

  const light = onImage && !open
  const solid = !light && (!atTop || open)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[transform,background-color,color] duration-500 ease-out ${
        hidden && !open ? '-translate-y-full' : 'translate-y-0'
      } ${solid ? 'bg-background' : 'bg-transparent'} ${light ? 'text-white' : 'text-foreground'}`}
    >
      <div className="relative flex h-[72px] items-center justify-between px-5 md:h-[110px] md:px-[2.7vw]">
        <a href="/" aria-label="AURE — на главную" className="relative z-10">
          <Logo height={15} light={light} />
        </a>

        <nav aria-label="Основное меню" className="absolute inset-x-0 hidden justify-center gap-[3.5vw] lg:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13px] uppercase tracking-[0.22em] opacity-90 transition-opacity hover:opacity-60"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="relative z-10 flex items-center gap-5">
          <a href="/projects" aria-label="Поиск по проектам" className="transition-opacity hover:opacity-60">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="14" cy="10" r="7" stroke="currentColor" strokeWidth="1.4" />
              <path d="M9 15 3 21" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            className="text-[12px] uppercase tracking-[0.22em] lg:hidden"
          >
            {open ? 'Закрыть' : 'Меню'}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Мобильное меню" className="h-[calc(100dvh-72px)] bg-background px-5 pt-8 lg:hidden">
          {NAV.map((item) => (
            <a key={item.label} href={item.href} className="block py-3 font-serif text-[22px] uppercase tracking-[0.35em]">
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
