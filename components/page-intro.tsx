import type { ReactNode } from 'react'

/** Начало внутренней страницы: маленькая подпись и крупная лёгкая фраза. */
export function PageIntro({
  label,
  children,
  titleClassName = 'max-w-[1100px] text-[26px] leading-[1.2] md:text-[52px] md:leading-[1.15]',
}: {
  label: string
  children: ReactNode
  /** Размер и ширина заголовка, если странице нужен свой */
  titleClassName?: string
}) {
  return (
    <section className="mx-auto max-w-[1600px] px-5 pt-32 md:px-10 md:pt-44">
      <p className="text-[13px] text-muted-foreground">{label}</p>
      <h1 className={`mt-6 font-light tracking-[-0.02em] ${titleClassName}`}>
        {children}
      </h1>
    </section>
  )
}
