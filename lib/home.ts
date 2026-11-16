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
 * Какой кадр проекта показать на главной: номер фото в галерее проекта (1 — обложка)
 * и, при желании, какую часть кадра держать в центре при кадрировании.
 * Проекты, которых здесь нет, попадают на главную с обложкой — как только у них
 * появятся настоящие фото. Порядок ключей задаёт порядок подборки; новые проекты
 * встают после перечисленных.
 */
export const HOME_PICKS: Record<string, { photo: number; position?: string }> = {
  // большой зал ресторана: архитектура, панорамное окно и тёплый свет — первый экран
  'restoran-leningradskaya-oblast': { photo: 3, position: '50% 55%' },
  // светлая гостиная: общий план при дневном свете
  'kvartira-na-patriarshih': { photo: 1, position: '50% 60%' },
  // зона отдыха: фактура бархата, камня и подсветки стеллажа — деталь
  'apartamenty-serbiya': { photo: 3, position: '50% 45%' },
}
