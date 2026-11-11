/**
 * Портфолио студии. Всё, что показывают страницы «Проекты» и карточки на главной,
 * берётся отсюда.
 *
 * Картинки: у каждой есть путь в public/ (src) и промпт для генерации (prompt).
 * Пока файла нет, на его месте рисуется аккуратная заглушка в тон сайта
 * (components/project-image.tsx). Положите файл по этому пути — и он появится
 * на сайте без правок кода. Все промпты собраны в docs/image-prompts.md.
 */

export type Category = 'houses' | 'apartments' | 'hospitality' | 'commercial'

export const CATEGORIES: { id: Category; label: string }[] = [
  { id: 'houses', label: 'Частные дома' },
  { id: 'apartments', label: 'Квартиры' },
  { id: 'hospitality', label: 'Гостеприимство' },
  { id: 'commercial', label: 'Коммерческие' },
]

export function categoryLabel(id: Category) {
  return CATEGORIES.find((c) => c.id === id)?.label ?? ''
}

export type Ratio = '4/5' | '3/2' | '16/9' | '1/1'

export type ProjectImage = {
  /** Путь от public/, например /images/projects/dom-u-sosen/01.jpg */
  src: string
  alt: string
  ratio: Ratio
  /** Промпт для Midjourney / ChatGPT / любой генерации изображений */
  prompt: string
}

export type Project = {
  slug: string
  title: string
  category: Category
  location: string
  year: number
  area: string
  status: 'Реализован' | 'В работе'
  /** Одна строка под карточкой и в начале страницы проекта */
  summary: string
  description: string[]
  materials: string[]
  /** Первая — обложка, остальные — галерея */
  images: ProjectImage[]
  /** Тон заглушки, пока нет фото: 0 — светлый, 3 — самый тёмный */
  tone: 0 | 1 | 2 | 3
}

/** Общий хвост промпта: держит все кадры в одной стилистике. */
export const PROMPT_STYLE =
  'soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic'

const img = (slug: string, n: number, ratio: Ratio, alt: string, scene: string): ProjectImage => ({
  src: `/images/projects/${slug}/${String(n).padStart(2, '0')}.jpg`,
  alt,
  ratio,
  prompt: `${scene}, ${PROMPT_STYLE} --ar ${ratio.replace('/', ':')}`,
})

export const PROJECTS: Project[] = [
  {
    slug: 'dom-u-sosen',
    title: 'Дом у сосен',
    category: 'houses',
    location: 'Истра, Московская область',
    year: 2025,
    area: '320 м²',
    status: 'Реализован',
    summary: 'Загородный дом, где лес становится частью интерьера.',
    description: [
      'Двухэтажный дом для семьи с двумя детьми стоит на участке с вековыми соснами. Главная задача — не спорить с лесом, а впустить его внутрь: панорамное остекление гостиной выходит прямо на стволы, а палитра интерьера повторяет цвета коры, хвои и песка.',
      'Общие зоны собраны вокруг камина из светлого известняка. Кухня-столовая открыта на террасу, спальни на втором этаже спрятаны за дубовыми панелями. Мебель — низкая и спокойная, большая часть сделана на заказ.',
    ],
    materials: ['Дуб с масляным покрытием', 'Известняк', 'Известковая штукатурка', 'Лён', 'Шерсть'],
    tone: 1,
    images: [],
  },
  {
    slug: 'kvartira-na-patriarshih',
    title: 'Квартира на Патриарших',
    category: 'apartments',
    location: 'Москва',
    year: 2025,
    area: '145 м²',
    status: 'Реализован',
    summary: 'Тихая квартира в историческом доме с высокими потолками.',
    description: [
      'Квартира в доме начала XX века. Мы сохранили лепнину и окна, убрали поздние перегородки и вернули анфиладу комнат. Новые элементы — встроенные шкафы, кухонный остров, двери — сделаны максимально лаконичными, чтобы не конкурировать с архитектурой.',
      'Стены покрыты известковой краской в тёплом белом, пол — широкая дубовая доска ёлочкой. Свет — рассеянный, без потолочных люстр в гостиной: только торшеры и бра.',
    ],
    materials: ['Дубовый паркет ёлочкой', 'Известковая краска', 'Травертин', 'Латунь', 'Букле'],
    tone: 0,
    images: [],
  },
  {
    slug: 'otel-tishina',
    title: 'Бутик-отель «Тишина»',
    category: 'hospitality',
    location: 'Светлогорск, Калининградская область',
    year: 2025,
    area: '24 номера',
    status: 'Реализован',
    summary: 'Небольшой отель у моря, где главный сервис — покой.',
    description: [
      'Отель на 24 номера в двух минутах от Балтийского моря. Интерьеры построены на контрасте мягкого текстиля и грубых фактур: штукатурка ручной работы, необработанный камень, светлое дерево.',
      'В номерах нет телевизоров — вместо них кресло у окна и полка с книгами. Лобби работает как гостиная: камин, длинный общий стол, библиотека и кофе весь день.',
    ],
    materials: ['Штукатурка ручной работы', 'Ясень', 'Сланец', 'Лён', 'Керамика'],
    tone: 2,
    images: [],
  },
  {
    slug: 'loft-na-bersenevskoy',
    title: 'Лофт на Берсеневской',
    category: 'apartments',
    location: 'Москва',
    year: 2024,
    area: '210 м²',
    status: 'Реализован',
    summary: 'Бывшее производственное пространство, ставшее домом.',
    description: [
      'Пятиметровые потолки и кирпичные стены бывшей фабрики. Мы оставили кирпич и стальные балки, но смягчили их: кирпич закрыт тонким слоем известковой побелки, а пространство поделено низкими объёмами из дуба, которые не доходят до потолка.',
      'Спальня поднята на антресоль, под ней — библиотека и гардероб. Кухня спрятана в стену из дубовых фасадов и полностью закрывается.',
    ],
    materials: ['Побелённый кирпич', 'Морёный дуб', 'Сталь', 'Микроцемент', 'Шерсть'],
    tone: 3,
    images: [],
  },
  {
    slug: 'restoran-sever',
    title: 'Ресторан «Север»',
    category: 'hospitality',
    location: 'Санкт-Петербург',
    year: 2024,
    area: '260 м²',
    status: 'Реализован',
    summary: 'Ресторан северной кухни в тонах камня и дерева.',
    description: [
      'Интерьер вдохновлён северной природой: серый гранит, светлая сосна, туман. Зал разделён на несколько камерных зон, чтобы даже при полной посадке сохранялось ощущение приватности.',
      'Центр зала — открытая кухня с длинной стойкой из цельного камня. Свет приглушённый, тёплый, каждый стол освещён отдельно.',
    ],
    materials: ['Гранит', 'Сосна', 'Тонированное стекло', 'Льняной текстиль', 'Чернёная латунь'],
    tone: 3,
    images: [],
  },
  {
    slug: 'dom-na-beregu',
    title: 'Дом на берегу',
    category: 'houses',
    location: 'Карелия',
    year: 2023,
    area: '190 м²',
    status: 'Реализован',
    summary: 'Деревянный дом для отдыха у озера.',
    description: [
      'Одноэтажный дом из клеёного бруса на скалистом берегу озера. Все комнаты выходят окнами на воду, а длинная терраса связывает дом с причалом и баней.',
      'Внутри — только дерево, лён и камень. Минимум предметов, чтобы ничего не отвлекало от вида на озеро и смены света в течение дня.',
    ],
    materials: ['Клеёный брус', 'Карельский гранит', 'Лён', 'Шерсть', 'Керамика ручной работы'],
    tone: 1,
    images: [],
  },
  {
    slug: 'shourum-glina',
    title: 'Шоурум «Глина»',
    category: 'commercial',
    location: 'Москва',
    year: 2023,
    area: '180 м²',
    status: 'Реализован',
    summary: 'Пространство для керамики, похожее на галерею.',
    description: [
      'Шоурум и мастерская керамической студии. Экспозиция построена на постаментах из того же материала, что и стены, — тонированной в цвет глины штукатурки. Предметы будто вырастают из пространства.',
      'Мастерская отделена стеклянной перегородкой, чтобы гости видели процесс. Свет — потолочный рассеянный, плюс узкие акцентные лучи на отдельные работы.',
    ],
    materials: ['Тонированная штукатурка', 'Микроцемент', 'Дуб', 'Стекло', 'Нержавеющая сталь'],
    tone: 2,
    images: [],
  },
  {
    slug: 'spa-krasnaya-polyana',
    title: 'Спа «Красная Поляна»',
    category: 'hospitality',
    location: 'Сочи, Красная Поляна',
    year: 2025,
    area: '600 м²',
    status: 'В работе',
    summary: 'Горный спа-комплекс с бассейном и видом на хребет.',
    description: [
      'Спа-комплекс при горном курорте: бассейн, хаммам, сауны, зоны отдыха. Пространство спускается по рельефу, и с каждого уровня открывается вид на горы.',
      'Основной материал — светлый камень, который в бассейне и хаммаме переходит в мозаику того же тона. Дерево — только в зонах отдыха и саунах, чтобы оставаться тёплым на ощупь.',
    ],
    materials: ['Известняк', 'Каменная мозаика', 'Термососна', 'Лён', 'Терракота'],
    tone: 0,
    images: [],
  },
  {
    slug: 'ofis-liniya',
    title: 'Офис «Линия»',
    category: 'commercial',
    location: 'Москва',
    year: 2023,
    area: '420 м²',
    status: 'Реализован',
    summary: 'Офис, который больше похож на дом, чем на офис.',
    description: [
      'Офис инвестиционной компании на 40 человек. Вместо открытого зала — несколько «комнат» разного характера: библиотека для тихой работы, кухня с большим общим столом, переговорные с мягкой мебелью.',
      'Акустика решена текстилем и деревянными рейками, кабели и техника полностью скрыты. Палитра — тёплый белый, светлый дуб и графит.',
    ],
    materials: ['Дубовые рейки', 'Акустический войлок', 'Линолеум Forbo', 'Шерстяной ковролин', 'Алюминий'],
    tone: 1,
    images: [],
  },
]

/* ---------- Кадры проектов: обложка + галерея, с промптами ---------- */

const SCENES: Record<string, [Ratio, string, string][]> = {
  'dom-u-sosen': [
    ['4/5', 'Гостиная с панорамным окном на сосновый лес', 'living room of a modern country house with a floor-to-ceiling window framing tall pine trunks, low linen sofa, pale limestone fireplace, wide oak floor'],
    ['3/2', 'Кухня-столовая с выходом на террасу', 'open kitchen and dining area, long solid oak dining table with simple wooden chairs, sliding glass doors to a wooden terrace and pine forest, limewashed walls'],
    ['4/5', 'Спальня с дубовыми панелями', 'bedroom with oak wall paneling, low bed with off-white linen bedding, wool throw, small window onto pine branches, soft morning light'],
    ['3/2', 'Камин из известняка в гостиной', 'close-up of a monolithic pale limestone fireplace, stacked firewood, a ceramic vase with dry branches, textured lime plaster wall'],
  ],
  'kvartira-na-patriarshih': [
    ['4/5', 'Гостиная с лепниной и высокими окнами', 'living room in a historic Moscow apartment with high ceilings, original cornice moulding, tall windows with sheer linen curtains, herringbone oak parquet, boucle armchair, travertine coffee table'],
    ['3/2', 'Анфилада комнат', 'enfilade of rooms seen through a series of tall double doors, herringbone oak parquet, warm white lime-painted walls, minimal furniture'],
    ['4/5', 'Кухонный остров из травертина', 'minimal kitchen with a travertine island, handleless warm white cabinetry, slim brass pendant, tall window with daylight'],
    ['3/2', 'Спальня с торшером и креслом у окна', 'quiet bedroom with high ceiling and cornice, upholstered linen headboard, reading armchair by a tall window, floor lamp with paper shade'],
  ],
  'otel-tishina': [
    ['4/5', 'Номер с креслом у окна и видом на море', 'boutique hotel room by the Baltic sea, lounge chair by a large window with a sea view, hand-applied plaster walls, ash wood bed frame, linen bedding, no television'],
    ['3/2', 'Лобби-гостиная с камином и общим столом', 'hotel lobby designed as a living room, open fireplace, long communal ash wood table, bookshelves, slate floor, linen sofas'],
    ['4/5', 'Ванная из сланца и штукатурки', 'hotel bathroom with slate floor and plaster walls, freestanding stone bathtub under a small window, ceramic accessories, linen towels'],
    ['3/2', 'Коридор с мягким светом', 'quiet hotel corridor with textured plaster walls, recessed soft lighting, ash wood doors, natural wool runner'],
  ],
  'loft-na-bersenevskoy': [
    ['4/5', 'Двусветная гостиная с побелённым кирпичом', 'double-height loft living room in a former factory, whitewashed brick walls, exposed steel beams, large industrial windows, low dark-stained oak volumes, wool rug'],
    ['3/2', 'Кухня, спрятанная в стену из дуба', 'kitchen hidden behind a wall of dark-stained oak handleless fronts, microcement floor and island, factory windows, steel beams overhead'],
    ['4/5', 'Антресоль со спальней', 'mezzanine bedroom above a library in a loft, steel railing, whitewashed brick, low bed with grey linen, view down to the living space'],
    ['3/2', 'Библиотека под антресолью', 'built-in oak library shelves under a mezzanine, reading chair, warm lamp light, microcement floor'],
  ],
  'restoran-sever': [
    ['3/2', 'Зал ресторана с открытой кухней', 'Nordic restaurant dining room with an open kitchen and a long solid grey granite counter, pine wood tables, warm dim lighting, each table individually lit, linen textiles'],
    ['4/5', 'Камерная зона с банкеткой', 'intimate restaurant booth with a pine wood partition, grey linen upholstered banquette, small round table, blackened brass wall light'],
    ['3/2', 'Барная стойка из гранита', 'bar counter made of a single block of grey granite, tinted glass shelves, pine stools, moody warm lighting'],
    ['4/5', 'Сервировка на столе из сосны', 'detail of a pine dining table with handmade ceramic plates, linen napkin, candle, soft shadow'],
  ],
  'dom-na-beregu': [
    ['3/2', 'Дом из бруса на скалистом берегу озера', 'single-storey timber house on a rocky lakeshore in Karelia, long wooden terrace facing the water, pine forest, overcast soft light, exterior view'],
    ['4/5', 'Гостиная с видом на озеро', 'living room of a timber lake house, glued laminated timber walls, wide window onto a calm lake, low linen sofa, granite stone hearth'],
    ['3/2', 'Терраса и причал', 'wooden terrace leading to a small jetty on a still lake, two simple wooden lounge chairs, misty morning'],
    ['4/5', 'Спальня из дерева и льна', 'all-wood bedroom in a lake house, linen bedding, handmade ceramic lamp, small square window with a lake view'],
  ],
  'shourum-glina': [
    ['3/2', 'Шоурум керамики с постаментами из штукатурки', 'ceramics showroom like a gallery, plinths made of clay-toned plaster growing out of the floor, handmade vases and bowls, microcement floor, diffused ceiling light'],
    ['4/5', 'Керамика на постаменте в луче света', 'single handmade ceramic vessel on a clay-toned plaster plinth, narrow beam of light, soft shadows, plaster wall'],
    ['3/2', 'Мастерская за стеклянной перегородкой', 'pottery workshop seen through a glass partition, potter wheels, oak work tables, shelves of drying clay pieces'],
    ['4/5', 'Стеллаж с изделиями', 'oak and stainless steel shelving with rows of handmade ceramic cups and plates, clay-toned plaster wall'],
  ],
  'spa-krasnaya-polyana': [
    ['3/2', 'Бассейн с видом на горный хребет', 'indoor spa pool clad in pale limestone mosaic, panoramic window onto a mountain ridge, linen loungers, calm water reflections'],
    ['4/5', 'Хаммам из каменной мозаики', 'hammam with pale stone mosaic, heated stone bench, domed ceiling with small round skylights, steam, soft light'],
    ['3/2', 'Зона отдыха из термососны', 'spa relaxation room with thermo-pine slatted walls, low daybeds with linen, terracotta vessels, view of mountains'],
    ['4/5', 'Сауна с панорамным окном', 'sauna with thermo-pine benches and a panoramic window to snowy mountains'],
  ],
  'ofis-liniya': [
    ['3/2', 'Кухня офиса с общим столом', 'office kitchen like a home, long oak communal table, oak slat ceiling, warm white walls, pendant lights, plants'],
    ['4/5', 'Библиотека для тихой работы', 'quiet office library, oak bookshelves, wool carpet, two armchairs and a reading lamp, acoustic felt panels'],
    ['3/2', 'Переговорная с мягкой мебелью', 'meeting room with a soft sofa and armchairs instead of a conference table, oak slat walls, graphite accents, linen curtains'],
    ['4/5', 'Рабочее место у окна', 'single oak desk by a large window, aluminium task lamp, wool rug, neatly hidden cables'],
  ],
}

for (const p of PROJECTS) {
  p.images = (SCENES[p.slug] ?? []).map(([ratio, alt, scene], i) => img(p.slug, i + 1, ratio, alt, scene))
}

/** Кадры вне проектов: главный экран, студия. */
export const SITE_IMAGES = {
  hero: {
    src: '/images/home/hero.jpg',
    alt: 'Светлая гостиная с низким диваном, дубовым полом и видом на сосны',
    ratio: '16/9' as Ratio,
    prompt: `wide view of a serene living room, low off-white linen sofa, travertine coffee table, wide oak floorboards, limewashed walls, large window onto pine trees, ${PROMPT_STYLE} --ar 16:9`,
  },
  studio: {
    src: '/images/studio/studio.jpg',
    alt: 'Студия AURE: большой стол с образцами материалов',
    ratio: '3/2' as Ratio,
    prompt: `interior design studio, long oak table with material samples — stone, wood, linen, plaster swatches — architectural drawings, large window, ${PROMPT_STYLE} --ar 3:2`,
  },
  materials: {
    src: '/images/studio/materials.jpg',
    alt: 'Образцы материалов: камень, дуб, лён и штукатурка',
    ratio: '4/5' as Ratio,
    prompt: `flat lay close-up of interior material samples: travertine, oak veneer, linen fabric, lime plaster, brass, arranged on a plaster surface, soft side light, ${PROMPT_STYLE} --ar 4:5`,
  },
}

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug)
}

/** Проекты для главной: в порядке, задуманном для асимметричной сетки. */
export const FEATURED = ['dom-u-sosen', 'kvartira-na-patriarshih', 'otel-tishina', 'loft-na-bersenevskoy', 'dom-na-beregu', 'spa-krasnaya-polyana']
