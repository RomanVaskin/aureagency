import { SiteHeader } from './site-header'
import { SiteFooter } from './site-footer'

/** Пустой раздел: заголовок и строка «скоро». */
export function ComingSoon({ title }: { title: string }) {
  return (
    <>
      <SiteHeader />
      <main className="flex min-h-[70vh] flex-col items-center justify-center px-5 pt-32 text-center">
        <h1 className="font-serif text-[22px] uppercase tracking-[0.5em]">{title}</h1>
        <p className="mt-6 text-[14px] tracking-[0.04em] text-muted-foreground">Раздел наполняется</p>
      </main>
      <SiteFooter />
    </>
  )
}
