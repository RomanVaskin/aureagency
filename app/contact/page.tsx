import type { Metadata } from 'next'
import { SiteFooter } from '@/components/site-footer'
import { PageIntro } from '@/components/page-intro'
import { CITY, EMAIL, PHONE, PHONE_HREF, TELEGRAM_URL, WHATSAPP_URL } from '@/lib/contacts'
import { ContactForm } from './contact-form'

export const metadata: Metadata = {
  title: 'Контакты — EOS Bureau',
  description: 'Расскажите о своём доме, квартире или общественном пространстве — студия EOS Bureau ответит в течение дня.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  const rows = [
    EMAIL && { k: 'Почта', v: EMAIL, href: `mailto:${EMAIL}` },
    { k: 'Телефон', v: PHONE, href: PHONE_HREF },
    TELEGRAM_URL && { k: 'Telegram', v: TELEGRAM_URL.replace('https://t.me/', '@'), href: TELEGRAM_URL, ext: true },
    WHATSAPP_URL && { k: 'WhatsApp', v: 'Написать', href: WHATSAPP_URL, ext: true },
    { k: 'Студия', v: `${CITY}. Работаем по всему миру` },
  ].filter(Boolean) as { k: string; v: string; href?: string; ext?: boolean }[]

  return (
    // Фон как у первого слайда на главной; светлая шапка и текст (см. .page-dusk в globals.css)
    <div className="page-dusk" data-header="light">
      <main className="font-primary">
        <PageIntro
          className="lg:pt-[calc(var(--site-header-height)+1.5rem)]"
          titleClassName="text-[21px] leading-[1.25] md:text-[30px] md:leading-[1.2] lg:max-w-4xl lg:text-[28px]"
        >
          Расскажите о своём проекте - площадь, локацию и сроки. Мы ответим в течение рабочего дня.
        </PageIntro>

        <section className="mx-auto max-w-[1600px] px-5 pt-8 md:px-10 md:pt-28 lg:pt-12">
          <div className="grid gap-10 lg:gap-8">
            <dl className="border-t border-border">
              {rows.map((r) => (
                <div key={r.k} className="grid gap-1 border-b border-border py-6 md:grid-cols-12 md:gap-8 md:py-8 lg:py-4">
                  <dt className="text-[15px] text-muted-foreground md:col-span-3 md:self-center lg:text-[14px]">{r.k}</dt>
                  <dd className="text-[21px] font-light tracking-[-0.02em] md:col-span-9 md:text-[32px] lg:text-[22px]">
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
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter compact />
    </div>
  )
}
