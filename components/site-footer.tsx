import { Logo } from './logo'
import { PHONE, PHONE_HREF, TELEGRAM_URL, WHATSAPP_URL } from '@/lib/contacts'

type Item = { label: string; href: string; ext?: boolean }

const COLUMNS: { title: string; items: Item[] }[] = [
  {
    title: 'Разделы',
    items: [
      { label: 'Главная', href: '/' },
      { label: 'Проекты', href: '/projects' },
      { label: 'Услуги', href: '/services' },
      { label: 'Контакты', href: '/contact' },
    ],
  },
  {
    title: 'Мы в сети',
    items: [
      ...(TELEGRAM_URL ? [{ label: 'Telegram', href: TELEGRAM_URL, ext: true }] : []),
      ...(WHATSAPP_URL ? [{ label: 'WhatsApp', href: WHATSAPP_URL, ext: true }] : []),
      { label: PHONE, href: PHONE_HREF },
    ],
  },
]

/** Подвал как в образце: логотип слева, три колонки ссылок справа, копирайт внизу. */
export function SiteFooter() {
  return (
    <footer className="px-5 pb-6 pt-28 md:px-[5vw] md:pt-44">
      <div className="grid gap-14 md:grid-cols-[1fr_1fr] md:gap-8">
        <div>
          <Logo height={17} />
        </div>
        <div className="grid grid-cols-2 gap-y-12 sm:grid-cols-2">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h2 className="text-[13px] font-medium uppercase tracking-[0.22em]">{col.title}</h2>
              <ul className="mt-8 space-y-[14px] text-[15px] tracking-[0.03em] text-muted-foreground">
                {col.items.map((it) => (
                  <li key={it.label}>
                    <a
                      href={it.href}
                      {...(it.ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="transition-colors hover:text-foreground"
                    >
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-24 text-[14px] tracking-[0.03em] text-muted-foreground md:mt-40">© {new Date().getFullYear()} AURE</p>
    </footer>
  )
}
