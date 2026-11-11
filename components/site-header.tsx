'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from './logo'

const nav = [
  { label: 'Проекты', href: '/projects' },
  { label: 'Студия', href: '/studio' },
  { label: 'Контакты', href: '/contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => setOpen(false), [pathname])

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 md:h-20 md:px-10">
        <Link href="/" className="flex items-center" aria-label="AURE — на главную">
          <Logo height={16} />
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Основное меню">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`text-[13px] tracking-[0.04em] transition-colors hover:text-foreground ${
                isActive(item.href) ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-[13px] tracking-[0.04em] md:hidden"
        >
          {open ? 'Закрыть' : 'Меню'}
        </button>
      </div>

      {open && (
        <nav className="h-[calc(100dvh-4rem)] bg-background px-5 pt-10 md:hidden" aria-label="Мобильное меню">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 text-3xl font-light tracking-[-0.02em] text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
