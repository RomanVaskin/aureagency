'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Logo } from './logo'
import { PROJECTS_ENABLED } from '@/lib/sections'

const nav = [
  { label: 'Услуги', href: '/services' },
  { label: 'Процесс', href: '/process' },
  ...(PROJECTS_ENABLED ? [{ label: 'Проекты', href: '/projects' }] : []),
  { label: 'Система', href: '/system' },
  { label: 'Контакты', href: '/contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:px-10">
        <a href="/#top" className="flex items-center" aria-label="AURE AGENCY — на главную">
          <Logo height={20} />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-primary text-[13px] tracking-ui text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/contact"
            className="hidden rounded-full border border-foreground/15 px-5 py-2 font-primary text-[13px] font-normal tracking-ui transition-colors hover:bg-foreground hover:text-background sm:inline-block"
          >
            Обсудить проект
          </a>
          <button
            type="button"
            aria-label="Меню"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`h-px w-5 bg-foreground transition-transform ${open ? 'translate-y-[3px] rotate-45' : ''}`}
            />
            <span
              className={`h-px w-5 bg-foreground transition-transform ${open ? '-translate-y-[3px] -rotate-45' : ''}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/70 bg-background lg:hidden">
          <nav className="mx-auto flex max-w-[1400px] flex-col px-5 py-4 md:px-10">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 font-primary text-sm tracking-ui text-foreground/80 last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-foreground px-5 py-3 text-center font-primary text-sm font-normal tracking-ui text-background"
            >
              Обсудить проект
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
