import Link from 'next/link'
import { Logo } from './logo'
import { CITY, EMAIL, PHONE, PHONE_HREF, TELEGRAM_URL, WHATSAPP_URL } from '@/lib/contacts'

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border md:mt-48">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-14 text-[13px] leading-relaxed md:grid-cols-4 md:px-10 md:py-20">
        <div>
          <Logo height={14} />
          <p className="mt-5 max-w-[240px] text-muted-foreground">
            Студия архитектуры и дизайна интерьера. Тихие пространства из натуральных материалов.
          </p>
        </div>

        <div>
          <p className="text-muted-foreground">Студия</p>
          <p className="mt-3">{CITY}</p>
          <p>Работаем по всей России</p>
        </div>

        <div>
          <p className="text-muted-foreground">Связаться</p>
          <ul className="mt-3 space-y-1">
            {EMAIL && (
              <li>
                <a href={`mailto:${EMAIL}`} className="hover:text-muted-foreground">{EMAIL}</a>
              </li>
            )}
            <li>
              <a href={PHONE_HREF} className="hover:text-muted-foreground">{PHONE}</a>
            </li>
            {TELEGRAM_URL && (
              <li>
                <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground">Telegram</a>
              </li>
            )}
            {WHATSAPP_URL && (
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground">WhatsApp</a>
              </li>
            )}
          </ul>
        </div>

        <div>
          <p className="text-muted-foreground">Разделы</p>
          <ul className="mt-3 space-y-1">
            <li><Link href="/projects" className="hover:text-muted-foreground">Проекты</Link></li>
            <li><Link href="/studio" className="hover:text-muted-foreground">Студия</Link></li>
            <li><Link href="/contact" className="hover:text-muted-foreground">Контакты</Link></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1600px] justify-between px-5 pb-10 text-[12px] text-muted-foreground md:px-10">
        <span>© {new Date().getFullYear()} AURE</span>
        <span>Архитектура и интерьер</span>
      </div>
    </footer>
  )
}
