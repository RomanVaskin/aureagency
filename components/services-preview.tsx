'use client'

import { useEffect, useRef, useState, type MouseEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { InView } from './in-view'

/**
 * Order matches the photos; each opens its section on /services. Captions may wrap
 * to two lines; the non-breaking hyphen and word joiner keep "Estate-CRM" and
 * "2–7%" whole.
 */
const images = [
  {
    src: '/-11.png',
    caption: 'Уникальный Estate\u2011CRM',
    href: '/system#digital',
    // onyx: keep the crossing veins on the left in frame
    className: 'object-[25%_50%]',
  },
  {
    src: '/-22.png',
    caption: 'Брокеридж 2–\u20607%',
    href: '/services#brokerage',
    className: 'object-center',
  },
  {
    src: '/IMG_6154.JPG',
    caption: 'SEO / SMM / Digital',
    href: '/system#promotion',
    className: 'object-center',
  },
  {
    src: '/-44.png',
    caption: 'Комплексный маркетинг',
    href: '/services#complex-marketing',
    // leather: keep the light falling across the right side in frame
    className: 'object-[78%_50%]',
  },
]

/** Any device without a real hover pointer (phones, iPad): first tap previews, second tap goes. */
function isTouch() {
  return !window.matchMedia('(hover: hover) and (pointer: fine)').matches
}

/**
 * The four-image gallery; vertical spacing comes from the parent ServicesShowcase.
 * Mobile: 2×2 squares. From 640px: one flex row whose height is fixed from the
 * container width (container query units), so a hovered card can grow wider
 * (accordion) without changing the row height. Photos rest in natural colour; the
 * active one darkens evenly, zooms in and shows its centred white caption.
 * Mouse: :hover (and :focus-visible) drive it and a click follows the link.
 * Touch: the first tap marks the card .is-active (darken, zoom, caption — no width
 * change), a second tap on it follows the link, a tap elsewhere closes it.
 * Motion lives in globals.css under .svc-gallery.
 */
export function ServicesPreview() {
  const [active, setActive] = useState<number | null>(null)
  const rootRef = useRef<HTMLDivElement | null>(null)

  // close the open card on a tap anywhere outside the gallery
  useEffect(() => {
    if (active === null) return
    const close = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setActive(null)
    }
    document.addEventListener('pointerdown', close)
    return () => document.removeEventListener('pointerdown', close)
  }, [active])

  const onCardClick = (e: MouseEvent<HTMLAnchorElement>, i: number) => {
    if (active === i || !isTouch()) return
    e.preventDefault()
    setActive(i)
  }

  return (
    <div ref={rootRef} className="mx-auto w-full max-w-[1020px] [container-type:inline-size]">
      <InView
        threshold={0.2}
        className="svc-gallery grid grid-cols-2 gap-2 sm:flex sm:h-[calc((100cqw_-_3*var(--g))/4)] sm:gap-[var(--g)] [--g:10px] lg:[--g:14px]"
      >
        {images.map((img, i) => (
          <Link
            key={img.src}
            href={img.href}
            onClick={(e) => onCardClick(e, i)}
            style={{ '--i': i } as React.CSSProperties}
            className={`svc-item relative aspect-square overflow-hidden sm:aspect-auto sm:min-w-0 sm:flex-1 ${active === i ? 'is-active' : ''}`}
          >
            <Image
              src={img.src}
              alt=""
              fill
              sizes="(min-width: 1024px) 300px, (min-width: 640px) 33vw, 50vw"
              className={`svc-img block object-cover ${img.className}`}
            />
            <span className="svc-caption pointer-events-none absolute inset-0 z-[2] flex items-center justify-center px-4 text-center font-primary">
              {img.caption}
            </span>
          </Link>
        ))}
      </InView>
    </div>
  )
}
