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

export function SiteHeader() {
  const pathname = usePathname()
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    setHidden(false)
    let lastY = window.scrollY
    let raf = 0
    const update = () => {
      raf = 0
      const y = window.scrollY
      if (Math.abs(y - lastY) > 4) {
        setHidden(y > lastY && y > 120)
        lastY = y
      }
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-[#6f665b] text-white transition-transform duration-500 ease-out ${
        hidden && !open ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="relative flex h-[var(--site-header-height)] items-center justify-between px-5 md:px-[2.7vw]">
        <a href="/" aria-label="EOS Bureau — на главную" className="relative z-10">
          <Logo height={15} />
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
        <nav aria-label="Мобильное меню" className="h-[calc(100dvh-var(--site-header-height))] overflow-y-auto bg-background px-5 pt-8 text-foreground lg:hidden">
          {NAV.map((item) => (
            <a key={item.label} href={item.href} className="mobile-menu-link block py-3 text-[22px] font-light uppercase tracking-[0.5px]">
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
