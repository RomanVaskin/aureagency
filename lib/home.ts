/**
 * Главная страница: структура как у normcph.com, контент — заглушки.
 * Чтобы наполнить: замените тексты, а в image укажите путь к фото в public/
 * (пока файла нет, показывается однотонная заглушка).
 */

export type Slide = { title: string; text: string; image: string; href: string }

export type Card = {
  title: string
  /** Пустая строка — описания нет, под названием сразу идёт строка с разделом и годом */
  text: string
  /** Строка под описанием: «РАЗДЕЛ | ТИП | ГОД» */
  meta: string[]
  image: string
  href: string
  /** Сколько колонок из 4 занимает карточка: 1 — узкая, 2 — широкая */
  span: 1 | 2
}

export type Block =
  | { kind: 'work'; label: string; heading?: string; rows: Card[][] }
  | { kind: 'feature'; slide: Slide }

const TEXT =
  'Короткое описание проекта: место, задача и главная идея. Два-три предложения о материалах, свете и атмосфере пространства, которые помогают понять характер работы.'

const card = (n: number, span: 1 | 2, meta = ['АРХИТЕКТУРА', 'ЖИЛОЙ', '2026']): Card => ({
  title: `Проект ${n}`,
  text: TEXT,
  meta,
  image: `/images/home/card-${n}.jpg`,
  href: '/projects',
  span,
})

export const SLIDES: Slide[] = Array.from({ length: 6 }, (_, i) => ({
  title: `Проект ${i + 1}`,
  text: 'Одна-две строки о проекте: где он находится и какое настроение создаёт пространство. Текст стоит по центру в нижней части кадра.',
  image: `/images/home/slide-${i + 1}.jpg`,
  href: '/projects',
}))

export const BLOCKS: Block[] = [
  {
    kind: 'work',
    label: 'НОВОЕ',
    heading: 'Последние работы',
    rows: [
      [card(1, 2, ['АРХИТЕКТУРА', 'КОММЕРЧЕСКИЕ', '2026']), card(2, 1, ['КРЕАТИВ', 'ИЗДАНИЯ', '2026']), card(3, 1)],
      [card(4, 1), card(5, 1), card(6, 2, ['КРЕАТИВ', 'ВЫСТАВКИ', '2026'])],
    ],
  },
  {
    kind: 'feature',
    slide: {
      title: 'Избранный проект',
      text: 'Полноэкранный кадр одного проекта с названием и коротким описанием — пауза между блоками ленты.',
      image: '/images/home/feature-1.jpg',
      href: '/projects',
    },
  },
  {
    kind: 'work',
    label: 'ОТДЫХ',
    rows: [[card(7, 2, ['АРХИТЕКТУРА', 'ГОСТЕПРИИМСТВО', '2025']), card(8, 2, ['АРХИТЕКТУРА', 'ГОСТЕПРИИМСТВО', '2024'])]],
  },
  {
    kind: 'feature',
    slide: {
      title: 'Избранный проект',
      text: 'Ещё один полноэкранный кадр. Количество и порядок блоков задаются в lib/home.ts.',
      image: '/images/home/feature-2.jpg',
      href: '/projects',
    },
  },
  {
    kind: 'work',
    label: 'ДОМА',
    rows: [
      [card(9, 1), card(10, 2), card(11, 1)],
      [card(12, 2, ['ДИЗАЙН', 'МЕБЕЛЬ', '2025']), card(13, 1, ['ДИЗАЙН', 'СВЕТ', '2025']), card(14, 1, ['ДИЗАЙН', 'ТЕКСТИЛЬ', '2024'])],
    ],
  },
  {
    kind: 'work',
    label: 'ПРЕДМЕТЫ',
    rows: [[{ ...card(15, 2, ['ДИЗАЙН', 'ПРЕДМЕТЫ', '2022']), text: '' }, card(16, 2, ['ДИЗАЙН', 'ПРЕДМЕТЫ', '2024'])]],
  },
]
