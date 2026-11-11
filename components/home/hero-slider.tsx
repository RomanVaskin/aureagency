'use client'

import { useCallback, useEffect, useState, type ReactNode } from 'react'

const AUTOPLAY_MS = 6000

/**
 * Полноэкранный слайдер: кадры сменяются плавным затуханием, стрелки по бокам,
 * точки внизу, подпись (название + описание) по центру над точками.
 * Кадры рендерит сервер и передаёт сюда готовыми.
 */
export function HeroSlider({
  slides,
}: {
  slides: { key: string; media: ReactNode; title: string; text: string; href: string }[]
}) {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const n = slides.length
  const go = useCallback((d: number) => setI((v) => (v + d + n) % n), [n])

  useEffect(() => {
    if (paused || n < 2) return
    const t = setTimeout(() => go(1), AUTOPLAY_MS)
    return () => clearTimeout(t)
  }, [i, paused, go, n])

  return (
    <section
      data-header="light"
      className="relative h-[100svh] min-h-[520px] w-full overflow-hidden bg-[#4f4840] text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="карусель"
    >
      {slides.map((s, k) => (
        <div
          key={s.key}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${k === i ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden={k !== i}
        >
          {s.media}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/35 to-transparent" />
          <div className="absolute inset-x-0 bottom-[11vh] mx-auto max-w-[900px] px-6 text-center">
            <a href={s.href} tabIndex={k === i ? 0 : -1} className="font-serif text-[18px] uppercase tracking-[0.5em] md:text-[22px]">
              {s.title}
            </a>
            <p className="mt-6 hidden text-[14px] leading-[1.7] tracking-[0.04em] text-white/90 md:block">{s.text}</p>
          </div>
        </div>
      ))}

      {n > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Предыдущий проект"
            className="absolute left-3 top-1/2 -translate-y-1/2 p-3 md:left-6"
          >
            <Chevron dir="left" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Следующий проект"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 md:right-6"
          >
            <Chevron dir="right" />
          </button>
          <div className="absolute inset-x-0 bottom-4 flex justify-center gap-[10px]">
            {slides.map((s, k) => (
              <button
                key={s.key}
                type="button"
                onClick={() => setI(k)}
                aria-label={`Проект ${k + 1} из ${n}`}
                aria-current={k === i}
                className={`h-[6px] w-[6px] rounded-full transition-colors ${k === i ? 'bg-white' : 'bg-white/40 hover:bg-white/70'}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  )
}

function Chevron({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg width="14" height="26" viewBox="0 0 14 26" fill="none" aria-hidden>
      <path
        d={dir === 'left' ? 'M13 1 1 13l12 12' : 'M1 1l12 12L1 25'}
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  )
}
