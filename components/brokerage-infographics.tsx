import Image from 'next/image'
import { Reveal } from './reveal'

/**
 * Four equal slots under «Брокеридж», in this order. A slot with `src: null`
 * renders an empty #F3F3F1 card of the exact same size; to publish it, drop the
 * file into public/images/services/ and set its `src` — the grid and CSS stay as they are.
 */
const infographics: { id: string; src: string | null; alt: string }[] = [
  {
    id: 'deal-cycle',
    src: '/images/services/1.png',
    alt: 'Сроки: 2–4 месяца — средний цикл сделки',
  },
  {
    id: 'fee',
    src: '/images/services/2.png',
    alt: '2–7% от сделки',
  },
  {
    id: 'broker-base',
    src: '/3%20(1).png', // file: public/3 (1).png
    alt: 'Собственная база брокеров',
  },
  {
    id: 'investment',
    src: '/images/services/3.png',
    alt: 'Вложения: 0 руб. — мы самостоятельно оплачиваем рекламу и продвижение',
  },
]

/**
 * One square ratio for every slot, so all four share top and bottom lines. The
 * layouts are square too, and object-contain guarantees no text is ever trimmed.
 */
const SLOT_ASPECT = 'aspect-square'

// From md the whole gallery is scaled to 81% of the column and centred; phones keep full width.

export function BrokerageInfographics() {
  return (
    <div className="mt-14 grid grid-cols-1 gap-5 md:mx-auto md:mt-16 md:max-w-[81%] md:grid-cols-2 md:gap-5 lg:grid-cols-4">
      {infographics.map((item, i) => (
        <Reveal key={item.id} index={i}>
          <div
            className={`relative w-full overflow-hidden rounded-[18px] ${SLOT_ASPECT} ${item.src ? 'infographic-card' : 'bg-[#F3F3F1]'}`}
          >
            {item.src && (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="object-contain"
              />
            )}
          </div>
        </Reveal>
      ))}
    </div>
  )
}
