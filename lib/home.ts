/**
 * Главная страница — общие типы. Сами кадры подбираются автоматически
 * из раздела «Проекты» (lib/home-compose.ts); здесь только настройка подборки.
 */
import type { Ratio } from './projects'

export type Slide = { title: string; text: string; image: string; href: string; position?: string }

export type Card = {
  title: string
  /** Пустая строка — описания нет, под названием сразу идёт строка с разделом и годом */
  text: string
  /** Строка под описанием: «РАЗДЕЛ | МЕСТО | ГОД» */
  meta: string[]
  image: string
  alt?: string
  href: string
  /** Сколько колонок из 4 занимает карточка: 1 — узкая, 2 — широкая */
  span: 1 | 2
  /** С какой колонки начинается (для асимметричных рядов), необязательно */
  start?: 1 | 2 | 3 | 4
  /** Какую часть кадра показывать при кадрировании (CSS object-position) */
  position?: string
  ratio?: Ratio
}

export type Block =
  | { kind: 'work'; label: string; heading?: string; rows: Card[][] }
  | { kind: 'feature'; slide: Slide }

/**
 * Кадры проектов для главной. hero — фото для главной карусели (широкий общий план),
 * grid — другое фото того же проекта для ленты «Последние работы» (деталь, фактура),
 * чтобы на странице ни один снимок не повторялся. Номера — как в галерее проекта
 * (1 — обложка); position — какую часть кадра держать в центре при кадрировании.
 * Проект без записи здесь попадает в карусель с обложкой, в ленту — со вторым фото,
 * как только у него появятся настоящие фото. Порядок ключей = порядок слайдов.
 */
export type HomePick = { hero: number; grid?: number; heroPosition?: string; gridPosition?: string }

export const HOME_PICKS: Record<string, HomePick> = {
  // большой зал: архитектура, панорамное окно, тёплый свет / вход с каменной стойкой
  'restoran-leningradskaya-oblast': { hero: 3, heroPosition: '50% 55%', grid: 4 },
  // светлая гостиная при дневном свете / деталь: каменная лампа на консоли
  'kvartira-na-patriarshih': { hero: 1, heroPosition: '50% 60%', grid: 6 },
  // столовая с люстрой-облаком / зона отдыха: бархат, камень, подсветка
  'apartamenty-serbiya': { hero: 1, heroPosition: '50% 50%', grid: 3, gridPosition: '50% 45%' },
}
