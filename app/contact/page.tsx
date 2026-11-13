import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageIntro } from '@/components/page-intro'
import { CITY, EMAIL, PHONE, PHONE_HREF, TELEGRAM_URL, WHATSAPP_URL } from '@/lib/contacts'

export const metadata: Metadata = {
  title: 'Контакты — AURE',
  description: 'Расскажите о своём доме, квартире или общественном пространстве — студия AURE ответит в течение дня.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  const rows = [
    EMAIL && { k: 'Почта', v: EMAIL, href: `mailto:${EMAIL}` },
    { k: 'Телефон', v: PHONE, href: PHONE_HREF },
    TELEGRAM_URL && { k: 'Telegram', v: TELEGRAM_URL.replace('https://t.me/', '@'), href: TELEGRAM_URL, ext: true },
    WHATSAPP_URL && { k: 'WhatsApp', v: 'Написать', href: WHATSAPP_URL, ext: true },
    { k: 'Студия', v: `${CITY}. Работаем по всей России` },
  ].filter(Boolean) as { k: string; v: string; href?: string; ext?: boolean }[]

  return (
    <>
      <SiteHeader />
      <main className="font-primary">
        <PageIntro>
          Расскажите о своём проекте - площадь, место и сроки. Мы ответим в течение рабочего дня.
        </PageIntro>

        <section className="mx-auto max-w-[1600px] px-5 pt-16 md:px-10 md:pt-28">
          <dl className="border-t border-border">
            {rows.map((r) => (
              <div key={r.k} className="grid gap-1 border-b border-border py-6 md:grid-cols-12 md:gap-8 md:py-8">
                <dt className="text-[15px] text-muted-foreground md:col-span-3 md:self-center">{r.k}</dt>
                <dd className="text-[21px] font-light tracking-[-0.02em] md:col-span-9 md:text-[32px]">
                  {r.href ? (
                    <a
                      href={r.href}
                      {...(r.ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="underline-offset-[6px] hover:underline"
                    >
                      {r.v}
                    </a>
                  ) : (
                    r.v
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
