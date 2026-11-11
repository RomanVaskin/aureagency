# Промпты для изображений сайта

Сайт уже работает без фотографий: на месте каждого кадра стоит спокойная заглушка в тон сайта.
Чтобы заменить заглушку, сгенерируйте картинку по промпту и положите файл **точно по указанному пути** в `public/`.
После следующей сборки (новый коммит в PR) фото появится само, код менять не нужно.

**Советы**
- Промпты на английском — так генераторы (Midjourney, ChatGPT/DALL·E, Flux, Kandinsky) понимают их точнее.
- `--ar` в конце — соотношение сторон для Midjourney; в других сервисах выберите его в настройках и удалите этот хвост.
- Сохраняйте в JPG шириной 2000–2400 px, качество ~80, чтобы сайт грузился быстро.
- Общий стиль у всех промптов один, поэтому серия выглядит как работы одной студии:

```
soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic
```

## Главная и студия

### Светлая гостиная с низким диваном, дубовым полом и видом на сосны
Файл: `public/images/home/hero.jpg` · 16/9
```
wide view of a serene living room, low off-white linen sofa, travertine coffee table, wide oak floorboards, limewashed walls, large window onto pine trees, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 16:9
```

### Студия AURE: большой стол с образцами материалов
Файл: `public/images/studio/studio.jpg` · 3/2
```
interior design studio, long oak table with material samples — stone, wood, linen, plaster swatches — architectural drawings, large window, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

### Образцы материалов: камень, дуб, лён и штукатурка
Файл: `public/images/studio/materials.jpg` · 4/5
```
flat lay close-up of interior material samples: travertine, oak veneer, linen fabric, lime plaster, brass, arranged on a plaster surface, soft side light, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

## Дом у сосен
Частные дома · Истра, Московская область · 2025

### Обложка — Гостиная с панорамным окном на сосновый лес
Файл: `public/images/projects/dom-u-sosen/01.jpg` · 4/5
```
living room of a modern country house with a floor-to-ceiling window framing tall pine trunks, low linen sofa, pale limestone fireplace, wide oak floor, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

### Кухня-столовая с выходом на террасу
Файл: `public/images/projects/dom-u-sosen/02.jpg` · 3/2
```
open kitchen and dining area, long solid oak dining table with simple wooden chairs, sliding glass doors to a wooden terrace and pine forest, limewashed walls, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

### Спальня с дубовыми панелями
Файл: `public/images/projects/dom-u-sosen/03.jpg` · 4/5
```
bedroom with oak wall paneling, low bed with off-white linen bedding, wool throw, small window onto pine branches, soft morning light, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

### Камин из известняка в гостиной
Файл: `public/images/projects/dom-u-sosen/04.jpg` · 3/2
```
close-up of a monolithic pale limestone fireplace, stacked firewood, a ceramic vase with dry branches, textured lime plaster wall, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

## Квартира на Патриарших
Квартиры · Москва · 2025

### Обложка — Гостиная с лепниной и высокими окнами
Файл: `public/images/projects/kvartira-na-patriarshih/01.jpg` · 4/5
```
living room in a historic Moscow apartment with high ceilings, original cornice moulding, tall windows with sheer linen curtains, herringbone oak parquet, boucle armchair, travertine coffee table, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

### Анфилада комнат
Файл: `public/images/projects/kvartira-na-patriarshih/02.jpg` · 3/2
```
enfilade of rooms seen through a series of tall double doors, herringbone oak parquet, warm white lime-painted walls, minimal furniture, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

### Кухонный остров из травертина
Файл: `public/images/projects/kvartira-na-patriarshih/03.jpg` · 4/5
```
minimal kitchen with a travertine island, handleless warm white cabinetry, slim brass pendant, tall window with daylight, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

### Спальня с торшером и креслом у окна
Файл: `public/images/projects/kvartira-na-patriarshih/04.jpg` · 3/2
```
quiet bedroom with high ceiling and cornice, upholstered linen headboard, reading armchair by a tall window, floor lamp with paper shade, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

## Бутик-отель «Тишина»
Гостеприимство · Светлогорск, Калининградская область · 2025

### Обложка — Номер с креслом у окна и видом на море
Файл: `public/images/projects/otel-tishina/01.jpg` · 4/5
```
boutique hotel room by the Baltic sea, lounge chair by a large window with a sea view, hand-applied plaster walls, ash wood bed frame, linen bedding, no television, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

### Лобби-гостиная с камином и общим столом
Файл: `public/images/projects/otel-tishina/02.jpg` · 3/2
```
hotel lobby designed as a living room, open fireplace, long communal ash wood table, bookshelves, slate floor, linen sofas, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

### Ванная из сланца и штукатурки
Файл: `public/images/projects/otel-tishina/03.jpg` · 4/5
```
hotel bathroom with slate floor and plaster walls, freestanding stone bathtub under a small window, ceramic accessories, linen towels, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

### Коридор с мягким светом
Файл: `public/images/projects/otel-tishina/04.jpg` · 3/2
```
quiet hotel corridor with textured plaster walls, recessed soft lighting, ash wood doors, natural wool runner, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

## Лофт на Берсеневской
Квартиры · Москва · 2024

### Обложка — Двусветная гостиная с побелённым кирпичом
Файл: `public/images/projects/loft-na-bersenevskoy/01.jpg` · 4/5
```
double-height loft living room in a former factory, whitewashed brick walls, exposed steel beams, large industrial windows, low dark-stained oak volumes, wool rug, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

### Кухня, спрятанная в стену из дуба
Файл: `public/images/projects/loft-na-bersenevskoy/02.jpg` · 3/2
```
kitchen hidden behind a wall of dark-stained oak handleless fronts, microcement floor and island, factory windows, steel beams overhead, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

### Антресоль со спальней
Файл: `public/images/projects/loft-na-bersenevskoy/03.jpg` · 4/5
```
mezzanine bedroom above a library in a loft, steel railing, whitewashed brick, low bed with grey linen, view down to the living space, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

### Библиотека под антресолью
Файл: `public/images/projects/loft-na-bersenevskoy/04.jpg` · 3/2
```
built-in oak library shelves under a mezzanine, reading chair, warm lamp light, microcement floor, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

## Ресторан «Север»
Гостеприимство · Санкт-Петербург · 2024

### Обложка — Зал ресторана с открытой кухней
Файл: `public/images/projects/restoran-sever/01.jpg` · 3/2
```
Nordic restaurant dining room with an open kitchen and a long solid grey granite counter, pine wood tables, warm dim lighting, each table individually lit, linen textiles, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

### Камерная зона с банкеткой
Файл: `public/images/projects/restoran-sever/02.jpg` · 4/5
```
intimate restaurant booth with a pine wood partition, grey linen upholstered banquette, small round table, blackened brass wall light, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

### Барная стойка из гранита
Файл: `public/images/projects/restoran-sever/03.jpg` · 3/2
```
bar counter made of a single block of grey granite, tinted glass shelves, pine stools, moody warm lighting, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

### Сервировка на столе из сосны
Файл: `public/images/projects/restoran-sever/04.jpg` · 4/5
```
detail of a pine dining table with handmade ceramic plates, linen napkin, candle, soft shadow, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

## Дом на берегу
Частные дома · Карелия · 2023

### Обложка — Дом из бруса на скалистом берегу озера
Файл: `public/images/projects/dom-na-beregu/01.jpg` · 3/2
```
single-storey timber house on a rocky lakeshore in Karelia, long wooden terrace facing the water, pine forest, overcast soft light, exterior view, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

### Гостиная с видом на озеро
Файл: `public/images/projects/dom-na-beregu/02.jpg` · 4/5
```
living room of a timber lake house, glued laminated timber walls, wide window onto a calm lake, low linen sofa, granite stone hearth, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

### Терраса и причал
Файл: `public/images/projects/dom-na-beregu/03.jpg` · 3/2
```
wooden terrace leading to a small jetty on a still lake, two simple wooden lounge chairs, misty morning, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

### Спальня из дерева и льна
Файл: `public/images/projects/dom-na-beregu/04.jpg` · 4/5
```
all-wood bedroom in a lake house, linen bedding, handmade ceramic lamp, small square window with a lake view, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

## Шоурум «Глина»
Коммерческие · Москва · 2023

### Обложка — Шоурум керамики с постаментами из штукатурки
Файл: `public/images/projects/shourum-glina/01.jpg` · 3/2
```
ceramics showroom like a gallery, plinths made of clay-toned plaster growing out of the floor, handmade vases and bowls, microcement floor, diffused ceiling light, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

### Керамика на постаменте в луче света
Файл: `public/images/projects/shourum-glina/02.jpg` · 4/5
```
single handmade ceramic vessel on a clay-toned plaster plinth, narrow beam of light, soft shadows, plaster wall, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

### Мастерская за стеклянной перегородкой
Файл: `public/images/projects/shourum-glina/03.jpg` · 3/2
```
pottery workshop seen through a glass partition, potter wheels, oak work tables, shelves of drying clay pieces, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

### Стеллаж с изделиями
Файл: `public/images/projects/shourum-glina/04.jpg` · 4/5
```
oak and stainless steel shelving with rows of handmade ceramic cups and plates, clay-toned plaster wall, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

## Спа «Красная Поляна»
Гостеприимство · Сочи, Красная Поляна · 2025

### Обложка — Бассейн с видом на горный хребет
Файл: `public/images/projects/spa-krasnaya-polyana/01.jpg` · 3/2
```
indoor spa pool clad in pale limestone mosaic, panoramic window onto a mountain ridge, linen loungers, calm water reflections, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

### Хаммам из каменной мозаики
Файл: `public/images/projects/spa-krasnaya-polyana/02.jpg` · 4/5
```
hammam with pale stone mosaic, heated stone bench, domed ceiling with small round skylights, steam, soft light, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

### Зона отдыха из термососны
Файл: `public/images/projects/spa-krasnaya-polyana/03.jpg` · 3/2
```
spa relaxation room with thermo-pine slatted walls, low daybeds with linen, terracotta vessels, view of mountains, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

### Сауна с панорамным окном
Файл: `public/images/projects/spa-krasnaya-polyana/04.jpg` · 4/5
```
sauna with thermo-pine benches and a panoramic window to snowy mountains, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

## Офис «Линия»
Коммерческие · Москва · 2023

### Обложка — Кухня офиса с общим столом
Файл: `public/images/projects/ofis-liniya/01.jpg` · 3/2
```
office kitchen like a home, long oak communal table, oak slat ceiling, warm white walls, pendant lights, plants, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

### Библиотека для тихой работы
Файл: `public/images/projects/ofis-liniya/02.jpg` · 4/5
```
quiet office library, oak bookshelves, wool carpet, two armchairs and a reading lamp, acoustic felt panels, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

### Переговорная с мягкой мебелью
Файл: `public/images/projects/ofis-liniya/03.jpg` · 3/2
```
meeting room with a soft sofa and armchairs instead of a conference table, oak slat walls, graphite accents, linen curtains, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

### Рабочее место у окна
Файл: `public/images/projects/ofis-liniya/04.jpg` · 4/5
```
single oak desk by a large window, aluminium task lamp, wool rug, neatly hidden cables, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

