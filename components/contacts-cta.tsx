import Link from 'next/link'
import { ctaButtonClass } from './services-cta'

export function ContactsCta() {
  return (
    <div className="mx-auto flex max-w-[1400px] justify-center px-5 pb-20 md:px-10 md:pb-24">
      <Link href="/contact" className={ctaButtonClass}>
        Контакты
      </Link>
    </div>
  )
}
