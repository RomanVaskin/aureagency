'use client'

import { useState } from 'react'
import type { PriceTab } from '@/lib/pricing'

/**
 * Прямоугольный блок с фоном слайдера главной (.dusk-block в globals.css):
 * две колонки-вкладки сверху, под ними описание и список услуг выбранной вкладки.
 */
export function PriceTabs({ tabs }: { tabs: PriceTab[] }) {
  const [active, setActive] = useState(tabs[0]?.id)
  const tab = tabs.find((t) => t.id === active) ?? tabs[0]

  return (
    <div className="dusk-block px-5 py-10 md:px-14 md:py-16">
      <div role="tablist" aria-label="Услуги" className="grid grid-cols-2 border-b border-white/25">
        {tabs.map((t) => {
          const on = t.id === tab.id
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={on}
              aria-controls={`panel-${t.id}`}
              onClick={() => setActive(t.id)}
              className={`-mb-px border-b pb-4 text-left text-[18px] font-light tracking-[-0.01em] transition-colors md:pb-6 md:text-[32px] ${
                on ? 'border-white text-white' : 'border-transparent text-white/50 hover:text-white/80'
              }`}
            >
              {t.title}
            </button>
          )
        })}
      </div>

      <div role="tabpanel" id={`panel-${tab.id}`} aria-labelledby={`tab-${tab.id}`} key={tab.id} className="fade-up">
        <p className="mt-8 max-w-[640px] text-[15px] leading-relaxed text-white/75 md:mt-10">{tab.lead}</p>

        {tab.items.length > 0 ? (
          <ul className="mt-8 border-t border-white/20 md:mt-10">
            {tab.items.map((it) => (
              <li key={it.name} className="grid gap-1 border-b border-white/20 py-5 md:grid-cols-12 md:gap-8 md:py-6">
                <div className="md:col-span-8">
                  <p className="text-[17px] font-light md:text-[20px]">{it.name}</p>
                  {it.note && <p className="mt-1 text-[14px] leading-relaxed text-white/65">{it.note}</p>}
                </div>
                <p className="text-[17px] font-light md:col-span-4 md:text-right md:text-[20px]">{it.price}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-8 border-t border-white/20 pt-6 text-[14px] text-white/55 md:mt-10">
            Состав и стоимость скоро появятся
          </p>
        )}
      </div>
    </div>
  )
}
