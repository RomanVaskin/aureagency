/**
 * Блок «Стоимость» на странице «Услуги»: две вкладки и список услуг в каждой.
 * Чтобы добавить услугу — допишите строку в items: { name, note?, price }.
 * Если нет details и items пустой, во вкладке показывается строка «Состав и стоимость скоро появятся».
 */
export type PriceItem = {
  /** Название услуги */
  name: string
  /** Короткое пояснение под названием (необязательно) */
  note?: string
  /** Цена как будет написано на сайте, например 'от 3 500 ₽/м²' */
  price: string
}

export type PriceTab = {
  id: string
  title: string
  lead: string
  items: PriceItem[]
  details?: { title: string; scope: string[]; duration: string; price: string }
}

export const PRICE_TABS: PriceTab[] = [
  {
    id: 'design',
    title: 'Дизайн-проект',
    lead: 'Планировочные решения, концепция, визуализации и полный комплект рабочих чертежей.',
    items: [],
    details: {
      title: 'Состав дизайн-проекта',
      scope: [
        'Планировочные решения',
        'Концепция',
        'Визуализация',
        'Полный комплект рабочей документации',
      ],
      duration: '2–3 месяца',
      price: '6 500 руб./м²',
    },
  },
  {
    id: 'supervision',
    title: 'Авторский надзор',
    lead: 'Контроль хода работ, качества исполнения и соответствия проектным решениям.',
    items: [],
  },
]
