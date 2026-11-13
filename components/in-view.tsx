'use client'

import { useMemo, type ReactNode } from 'react'
import { useInView } from '@/lib/use-in-view'

/**
 * Wrapper that adds `is-inview` the first time it enters the viewport and keeps it
 * (the observer disconnects after the first hit). The motion itself lives in CSS,
 * keyed off `.is-inview` — see the scroll-reveal rules in app/globals.css.
 */
export function InView({
  as: Tag = 'div',
  className,
  threshold = 0.15,
  children,
}: {
  as?: 'div' | 'ol'
  className?: string
  /** Share of the element that must be visible before it plays. */
  threshold?: number
  children: ReactNode
}) {
  const options = useMemo(() => ({ threshold, rootMargin: '0px' }), [threshold])
  const { ref, inView } = useInView<HTMLElement>(options)

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={`${className ?? ''} ${inView ? 'is-inview' : ''}`}
    >
      {children}
    </Tag>
  )
}
