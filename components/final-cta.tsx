'use client'

import { Reveal } from './reveal'
import { PageEyebrow } from './page-eyebrow'
import { TELEGRAM_URL, WHATSAPP_URL } from '@/lib/contacts'

/**
 * Optional background photo for the section (path under public/). While null the
 * section is plain white and the form sits without its frosted-glass panel.
 */
const CONTACT_BACKGROUND: string | null = null

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 shrink-0 fill-current">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 shrink-0 fill-current">
      <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.5 6.75a1.5 1.5 0 0 0 .1 2.82l3.724 1.24 1.6 5.18a1.5 1.5 0 0 0 2.46.64l2.21-2.07 4.13 3.03a1.5 1.5 0 0 0 2.36-.88l3.06-15.06a1.5 1.5 0 0 0-1.62-1.865Zm-3.39 4.3-8.12 7.3-.32 3.03-1.27-4.12 9.71-6.21Z" />
    </svg>
  )
}

/** Black pill shared by both messenger buttons: 52/54px tall, white icon + label centred. */
const messengerBase =
  'inline-flex h-[52px] items-center justify-center gap-2.5 rounded-full px-6 bg-foreground font-primary text-[15px] font-normal leading-none tracking-ui text-background transition-opacity duration-300 hover:opacity-90 aria-disabled:cursor-default aria-disabled:hover:opacity-100 md:h-[54px] md:px-7 md:text-base'

/** Form field styles, tuned to stay crisp on the frosted panel. */
const fieldLabel =
  'font-primary text-[11px] font-normal uppercase leading-none tracking-label text-[#4A4743]'
const fieldInput =
  'border-b border-[rgba(70,65,60,0.18)] bg-transparent py-3 text-base text-[#242321] outline-none transition-colors placeholder:text-[#77736E] focus:border-foreground'

const messengers = [
  { label: 'WhatsApp', href: WHATSAPP_URL, Icon: WhatsAppIcon },
  { label: 'Telegram', href: TELEGRAM_URL, Icon: TelegramIcon },
]

export function FinalCta() {
  return (
    <section
      id="contact"
      className={`border-t border-border ${CONTACT_BACKGROUND ? 'bg-cover bg-[position:30%_50%] bg-no-repeat md:bg-center' : ''}`}
      style={CONTACT_BACKGROUND ? { backgroundImage: `url(${CONTACT_BACKGROUND})` } : undefined}
    >
      <div className="mx-auto max-w-[1400px] px-5 pb-24 pt-28 md:px-10 md:pb-32 md:pt-36">
        <Reveal className="grid gap-14 md:grid-cols-2 md:items-end md:gap-20">
          <div>
            <PageEyebrow title="Контакты" />
            <h1 className="mt-6 max-w-5xl font-primary text-balance text-[length:min(calc((100vw_-_2.5rem)/15.5),24px)] font-light leading-[1.1] tracking-display text-[#161616] md:text-[length:min(calc((100vw_-_5rem)/16.5),34px)] lg:text-[length:clamp(34px,3.2vw,52px)]">
              Обсудим ваш проект
            </h1>
            <p className="mt-8 max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Расскажите, что вы продаёте и на каком этапе находится проект. Мы посмотрим задачу и
              предложим самый короткий путь к росту продаж.
            </p>
            <p className="mt-12 font-primary text-[20px] font-normal leading-[1.2] tracking-[-0.01em] text-[#171717] md:text-[22px] lg:text-[24px]">
              Связаться с нами
            </p>
            <div className="mt-5 flex flex-wrap gap-3 md:gap-3.5">
              {messengers.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  // no href (and so no navigation) until the real link is set in lib/contacts.ts
                  href={href || undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-disabled={!href || undefined}
                  className={messengerBase}
                >
                  <Icon />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* over the background the form is frosted glass: a 27% warm-white layer and a
              14px blur of only what lies behind it (backdrop-filter), so the stone and the
              light still show through while the fields stay sharp */}
          <form
            className={`flex flex-col gap-6 ${CONTACT_BACKGROUND ? 'md:self-start md:rounded-[18px] md:border md:border-white/55 md:bg-[rgba(245,242,237,0.27)] md:p-9 md:backdrop-blur-[14px] lg:p-11' : ''}`}
            onSubmit={(e) => e.preventDefault()}
            aria-label="Форма заявки"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className={fieldLabel}>
                Имя
              </label>
              <input
                id="name"
                type="text"
                className={fieldInput}
                placeholder="Как к вам обращаться"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="contact" className={fieldLabel}>
                Телефон или Telegram
              </label>
              <input
                id="contact"
                type="text"
                className={fieldInput}
                placeholder="+7 или @username"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="project" className={fieldLabel}>
                Проект / комментарий
              </label>
              <textarea
                id="project"
                rows={3}
                className={`resize-none ${fieldInput}`}
                placeholder="Коротко о проекте и задаче"
              />
            </div>
            <button
              type="submit"
              className="mt-2 h-[52px] w-full rounded-full bg-foreground px-6 text-sm font-normal tracking-ui text-background transition-opacity hover:opacity-90 sm:w-auto sm:self-start sm:px-10 md:h-[54px]"
            >
              Отправить заявку
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
