import Link from 'next/link'
import { ctaButtonClass } from './services-cta'
import { ServicesPreview } from './services-preview'
import { PROJECTS_ENABLED } from '@/lib/sections'

/**
 * Услуги → four images → Кейсы (the last only while PROJECTS_ENABLED), between the
 * 'Кто мы' rule above and this block's own rule below. One flex column: equal outer padding and equal inner gaps
 * (76 / 52px from tablet up, 56 / 36px on mobile).
 */
export function ServicesShowcase() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 md:px-10">
      <div className="flex flex-col items-center gap-9 border-b border-border py-14 md:gap-[52px] md:py-[76px]">
        <Link href="/services" className={ctaButtonClass}>
          Услуги
        </Link>
        <ServicesPreview />
        {PROJECTS_ENABLED && (
          <Link href="/projects" className={ctaButtonClass}>
            Кейсы
          </Link>
        )}
      </div>
    </div>
  )
}
