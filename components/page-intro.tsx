import type { ReactNode } from 'react'

/** Единый размер крупных заголовков страниц: телефон 21px → компьютер 44px */
export const HEADING_SIZE = 'text-[21px] leading-[1.25] md:text-[30px] md:leading-[1.2] lg:text-[36px] xl:text-[44px] xl:leading-[1.15]'

/** Начало внутренней страницы: маленькая подпись и крупная лёгкая фраза. */
export function PageIntro({
  label,
  className = '',
  children,
  // общий размер для «Проектов», «Услуг» и «Контактов»
  titleClassName = HEADING_SIZE,
  action,
}: {
  /** Маленькая подпись над заголовком; без неё заголовок стоит сразу под шапкой */
  label?: string
  className?: string
  children: ReactNode
  /** Размер и ширина заголовка, если странице нужен свой */
  titleClassName?: string
  /** Что-то под заголовком, например кнопка */
  action?: ReactNode
}) {
  return (
    <section className={`mx-auto max-w-[1600px] px-5 pt-[calc(var(--site-header-height)+2rem)] md:px-10 md:pt-[calc(var(--site-header-height)+2.5rem)] ${className}`}>
      {label && <p className="mb-6 text-[13px] text-muted-foreground">{label}</p>}
      <h1 className={`font-light tracking-[-0.02em] ${titleClassName}`}>
        {children}
      </h1>
      {action && <div className="mt-8 md:mt-10">{action}</div>}
    </section>
  )
}
