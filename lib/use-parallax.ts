'use client'

import { useEffect, useRef } from 'react'

/** Subtle scroll-linked vertical offset. Disabled on mobile and reduced-motion. */
export function useParallax<T extends HTMLElement>(strength = 0.12, max = 24) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const media = window.matchMedia('(min-width: 768px)')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!media.matches || reduced.matches) return

    let frame = 0

    const update = () => {
      frame = 0
      const rect = node.getBoundingClientRect()
      const viewportCenter = window.innerHeight / 2
      const elementCenter = rect.top + rect.height / 2
      const distance = elementCenter - viewportCenter
      const offset = Math.max(-max, Math.min(max, -distance * strength))
      node.style.transform = `translateY(${offset.toFixed(1)}px)`
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
      node.style.transform = ''
    }
  }, [strength, max])

  return ref
}
