import type { ReactNode } from 'react'

/** Large light section heading on the Process page, aligned to the content edge. */
export function ProcessHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-primary text-[30px] font-light leading-[1.05] tracking-[-0.025em] text-[#111] md:text-[length:clamp(40px,4vw,60px)]">
      {children}
    </h2>
  )
}
