'use client'

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'
import { DOCUMENTATION_ITEMS, DOCUMENTATION_NOTE, SERVICES, type ServiceStage } from '@/lib/services'
import styles from './services-explorer.module.css'

type Service = (typeof SERVICES)[number]
const number = (index: number) => String(index + 1).padStart(2, '0')
const focus = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground'
const body = 'text-[15px] leading-relaxed text-muted-foreground md:text-[18px]'

function Mark({ open }: { open: boolean }) {
  return <span aria-hidden="true" data-open={open} className={styles.mark} />
}

function Disclosure({ id, open, children }: { id: string; open: boolean; children: ReactNode }) {
  return (
    <div id={id} inert={!open} aria-hidden={!open} data-open={open} className={styles.disclosure}>
      <div className={styles.clip}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  )
}

function WorkList({ items }: { items: readonly string[] }) {
  return <ul className="list-disc space-y-1 pl-5">{items.map((item) => <li key={item}>{item}</li>)}</ul>
}

function ServiceStages({ service }: { service: Service }) {
  const id = useId()
  const [expanded, setExpanded] = useState<number[]>([])
  const [documentationOpen, setDocumentationOpen] = useState(false)
  const allOpen = expanded.length === service.stages.length

  function toggleStage(index: number, stage: ServiceStage) {
    const open = expanded.includes(index)
    if (open && stage.documentation) setDocumentationOpen(false)
    setExpanded(open ? expanded.filter((item) => item !== index) : [...expanded, index])
  }

  function toggleAll() {
    setExpanded(allOpen ? [] : service.stages.map((_, index) => index))
    if (allOpen) setDocumentationOpen(false)
  }

  return (
    <>
      <p className={`max-w-[640px] ${body}`}>{service.description}</p>
      <div className="mt-6 flex justify-end md:mt-8">
        <button
          type="button"
          onClick={toggleAll}
          className={`min-h-11 text-[13px] text-muted-foreground underline-offset-4 hover:text-foreground hover:underline ${focus}`}
        >
          {allOpen ? 'Свернуть все этапы' : 'Раскрыть все этапы'}
        </button>
      </div>
      <div className="border-t border-border">
        {service.stages.map((stage, index) => {
          const open = expanded.includes(index)
          const panel = `${id}-stage-${index}`
          return (
            <div key={stage.title} className="border-b border-border">
              <h3>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={panel}
                  onClick={() => toggleStage(index, stage)}
                  className={`${styles.trigger} ${focus} flex min-h-12 w-full items-center gap-3 border-b border-transparent py-3 text-left text-[15px] font-light md:text-[21px]`}
                >
                  {service.numbered && <span className="shrink-0 text-[13px] text-muted-foreground">{number(index)} /</span>}
                  <span className="min-w-0 flex-1">{stage.title}</span>
                  <Mark open={open} />
                </button>
              </h3>
              <Disclosure id={panel} open={open}>
                <div className={`space-y-3 pb-5 pt-1 ${body}`}>
                  {stage.description && <p>{stage.description}</p>}
                  {stage.items && <WorkList items={stage.items} />}
                  {stage.note && <p className="text-[13px]">{stage.note}</p>}
                  {stage.documentation && (
                    <>
                      <button
                        type="button"
                        aria-expanded={documentationOpen}
                        aria-controls={`${panel}-details`}
                        onClick={() => setDocumentationOpen(!documentationOpen)}
                        className={`inline-flex min-h-11 items-center gap-3 text-left text-[15px] text-foreground underline underline-offset-4 ${focus}`}
                      >
                        {documentationOpen ? 'Скрыть состав документации' : 'Смотреть состав документации'}
                        <Mark open={documentationOpen} />
                      </button>
                      <Disclosure id={`${panel}-details`} open={documentationOpen}>
                        <div className="space-y-3 pb-1">
                          <WorkList items={DOCUMENTATION_ITEMS} />
                          <p className="text-[13px]">{DOCUMENTATION_NOTE}</p>
                        </div>
                      </Disclosure>
                    </>
                  )}
                </div>
              </Disclosure>
            </div>
          )
        })}
      </div>
      {service.note && <p className="mt-5 max-w-[640px] text-[13px] leading-relaxed text-muted-foreground">{service.note}</p>}
    </>
  )
}

export function ServicesExplorer() {
  const id = useId()
  const [desktop, setDesktop] = useState(0)
  const [mobile, setMobile] = useState<number | null>(null)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])

  function onTabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = SERVICES.length - 1
    let next: number
    switch (event.key) {
      case 'ArrowDown':
        next = index === last ? 0 : index + 1
        break
      case 'ArrowUp':
        next = index === 0 ? last : index - 1
        break
      case 'Home':
        next = 0
        break
      case 'End':
        next = last
        break
      default:
        return
    }
    event.preventDefault()
    setDesktop(next)
    tabs.current[next]?.focus()
  }

  return (
    <>
      <div className="hidden items-start gap-12 lg:grid lg:grid-cols-[minmax(0,3fr)_minmax(0,5fr)] xl:gap-20">
        <div role="tablist" aria-label="Выбор услуги" aria-orientation="vertical" className="border-t border-border">
          {SERVICES.map((service, index) => (
            <button
              key={service.id}
              ref={(element) => { tabs.current[index] = element }}
              type="button"
              role="tab"
              id={`${id}-tab-${service.id}`}
              aria-selected={desktop === index}
              aria-controls={`${id}-desktop-${service.id}`}
              tabIndex={desktop === index ? 0 : -1}
              onClick={() => setDesktop(index)}
              onKeyDown={(event) => onTabKey(event, index)}
              className={`${styles.trigger} ${focus} flex min-h-16 w-full items-baseline gap-4 border-b border-border py-5 text-left text-[15px] uppercase tracking-[0.2em] xl:text-[18px]`}
            >
              <span className="shrink-0 text-[13px]">{number(index)} /</span>
              <span className="min-w-0">{service.title}</span>
            </button>
          ))}
        </div>
        {SERVICES.map((service, index) => (
          <div
            key={service.id}
            hidden={desktop !== index}
            id={`${id}-desktop-${service.id}`}
            role="tabpanel"
            aria-labelledby={`${id}-tab-${service.id}`}
            tabIndex={0}
            className={`${styles.panel} ${focus} min-w-0`}
          >
            <h2 className="mb-4 text-[32px] font-light tracking-[-0.02em]">{service.title}</h2>
            <ServiceStages service={service} />
          </div>
        ))}
      </div>

      <div className="border-t border-border lg:hidden">
        {SERVICES.map((service, index) => {
          const open = mobile === index
          const panel = `${id}-mobile-${service.id}`
          return (
            <div key={service.id} className="border-b border-border">
              <h2>
                <button
                  type="button"
                  aria-controls={panel}
                  aria-expanded={open}
                  onClick={() => setMobile(open ? null : index)}
                  className={`${styles.trigger} ${focus} flex min-h-16 w-full items-center gap-3 border-b border-transparent py-4 text-left text-[15px] uppercase tracking-[0.16em] md:text-[18px]`}
                >
                  <span className="shrink-0 text-[13px]">{number(index)} /</span>
                  <span className="min-w-0 flex-1">{service.title}</span>
                  <Mark open={open} />
                </button>
              </h2>
              <Disclosure id={panel} open={open}>
                <div className="pb-6 pt-2"><ServiceStages service={service} /></div>
              </Disclosure>
            </div>
          )
        })}
      </div>
    </>
  )
}
