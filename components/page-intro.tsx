import type { ReactNode } from 'react'

/** Начало внутренней страницы: маленькая подпись и крупная лёгкая фраза. */
export function PageIntro({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="mx-auto max-w-[1600px] px-5 pt-32 md:px-10 md:pt-44">
      <p className="text-[13px] text-muted-foreground">{label}</p>
      <h1 className="mt-6 max-w-[1100px] text-[26px] font-light leading-[1.2] tracking-[-0.02em] md:text-[52px] md:leading-[1.15]">
        {children}
      </h1>
    </section>
  )
}
