'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

/**
 * Article that gets `is-active` while it crosses the middle band of the screen —
 * the touch-screen stand-in for :hover (see .package-card in globals.css).
 * Devices with a real hover pointer never get the class; they use :hover.
 */
export function FocusCard({ className, children }: { className: string; children: ReactNode }) {
  const ref = useRef<HTMLElement | null>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const observer = new IntersectionObserver(([entry]) => setActive(entry.isIntersecting), {
      // a band 30% tall across the vertical centre of the viewport
      rootMargin: '-35% 0px -35% 0px',
    })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <article ref={ref} className={`${className} ${active ? 'is-active' : ''}`}>
      {children}
    </article>
  )
}
