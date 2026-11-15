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
Файл: `public/photos/home-hero.jpg` · 16/9
```
wide view of a serene living room, low off-white linen sofa, travertine coffee table, wide oak floorboards, limewashed walls, large window onto pine trees, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 16:9
```

### Студия EOS Bureau: большой стол с образцами материалов
Файл: `public/photos/studio.jpg` · 3/2
```
interior design studio, long oak table with material samples — stone, wood, linen, plaster swatches — architectural drawings, large window, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

### Образцы материалов: камень, дуб, лён и штукатурка
Файл: `public/photos/materials.jpg` · 4/5
```
flat lay close-up of interior material samples: travertine, oak veneer, linen fabric, lime plaster, brass, arranged on a plaster surface, soft side light, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

## Апартаменты в Сербии
Квартиры · Белград, Сербия · 2025

### Обложка — Столовая: круглый ореховый стол, кресла из оливкового бархата и люстра-облако
Файл: `public/photos/apartamenty-serbiya-01.jpg` · 16/9
```
dining room with a round walnut table, olive velvet chairs, cloud-shaped pendant, panoramic windows, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 16:9
```

### Гостиная с диваном букле и мраморным журнальным столиком
Файл: `public/photos/apartamenty-serbiya-02.jpg` · 1/1
```
living room with a boucle sofa, green marble coffee table, walnut shelving with lighting, woven pendant, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 1:1
```

### Зона отдыха: кресло из оливкового бархата у подсвеченного стеллажа
Файл: `public/photos/apartamenty-serbiya-03.jpg` · 4/5
```
lounge corner with an olive velvet armchair and pouf, backlit walnut shelving, olive tree in a stone pot, abstract stone-texture artwork, floor lamp, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

### Спальня: изголовье из ткани, вставки из зелёного мрамора
Файл: `public/photos/apartamenty-serbiya-04.jpg` · 4/5
```
bedroom with an upholstered headboard, walnut and green marble wall, olive bedding, boucle bench, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

### Деталь спальни: ореховая тумба и лампа у кровати
Файл: `public/photos/apartamenty-serbiya-05.jpg` · 2/3
```
detail of a walnut bedside table with a lamp beside a boucle bed and a green marble panel, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 2:3
```

### Ванная с каменной ванной у окна в сад
Файл: `public/photos/apartamenty-serbiya-06.jpg` · 1/1
```
bathroom with a freestanding stone bathtub by a window to the garden, walnut vanity, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 1:1
```

### Раковина на мраморной столешнице и круглое зеркало с подсветкой
Файл: `public/photos/apartamenty-serbiya-07.jpg` · 4/5
```
washbasin on a green marble vanity with walnut drawers and a round backlit mirror, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

### Вторая ванная: мрамор, орех и бронзовые бра
Файл: `public/photos/apartamenty-serbiya-08.jpg` · 4/5
```
second bathroom with a green marble vanity, round backlit mirror and bronze wall lights, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

### Туалетный столик из мрамора у круглого зеркала
Файл: `public/photos/apartamenty-serbiya-09.jpg` · 1/1
```
green marble dressing table with a round mirror, boucle stool and a vase with branches, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 1:1
```

## Ресторан в Ленинградской области
Коммерческие помещения · Ленинградская область · 2025

### Обложка — Стойка хостес из цельного камня и олива в кадке
Файл: `public/photos/restoran-leningradskaya-oblast-01.jpg` · 3/2
```
restaurant reception with a solid rough stone desk, walnut wall, olive tree, warm hidden lighting, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

### Столы у панорамного окна и бар из мрамора
Файл: `public/photos/restoran-leningradskaya-oblast-02.jpg` · 16/9
```
restaurant dining tables with boucle chairs by panoramic windows, marble bar with backlighting, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 16:9
```

### Основной зал с видом на лес
Файл: `public/photos/restoran-leningradskaya-oblast-03.jpg` · 16/9
```
main dining hall with panoramic glazing onto trees, marble columns, olive trees, warm linear lighting, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 16:9
```

### Входная зона: каменная стойка с подсветкой и цветущие ветви
Файл: `public/photos/restoran-leningradskaya-oblast-04.jpg` · 3/2
```
entrance with a backlit stone reception desk, walnut panels and blossoming branches, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

### Приватный зал с длинным столом у стены из камня
Файл: `public/photos/restoran-leningradskaya-oblast-05.jpg` · 16/9
```
private dining room with a long table, upholstered chairs, rough stone feature wall and pendant lamps, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 16:9
```

### Уборная: мраморная раковина и подсветка в нишах
Файл: `public/photos/restoran-leningradskaya-oblast-06.jpg` · 3/2
```
restroom with a long marble washbasin, backlit mirrors and walnut doors, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

## Квартира на Патриарших
Квартиры · Москва · 2025

### Обложка — Гостиная с мягким диваном, креслами букле и панорамным окном в сад
Файл: `public/photos/kvartira-na-patriarshih-01.jpg` · 16/9
```
living room with a long boucle sofa, two round armchairs, low oak coffee table, linen curtains along the wall, panoramic window onto a garden, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 16:9
```

### Зона для чтения: кресла букле у стеллажа из тёмного дуба
Файл: `public/photos/kvartira-na-patriarshih-02.jpg` · 1/1
```
reading corner with two round boucle armchairs, dark oak shelving with books and ceramics, floor lamp, sheer curtains, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 1:1
```

### Прихожая: каменный постамент с чашей и высокие дубовые двери
Файл: `public/photos/kvartira-na-patriarshih-03.jpg` · 1/1
```
entrance with a textured stone plinth and bowl, tall dark oak doors, stone floor, linen curtains, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 1:1
```

### Столовая с длинным дубовым столом и кухонным островом из камня
Файл: `public/photos/kvartira-na-patriarshih-04.jpg` · 3/2
```
dining area with a long dark oak table and chairs, paper pendant lamp, stone kitchen island in front of an oak wall, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

### Спальня с низкой кроватью, льняным бельём и пуфами
Файл: `public/photos/kvartira-na-patriarshih-05.jpg` · 1/1
```
bedroom with a low platform bed, linen bedding, two round poufs, oak wall slats, plaster wall, tall window, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 1:1
```

### Деталь: каменная лампа и чаша на дубовой консоли
Файл: `public/photos/kvartira-na-patriarshih-06.jpg` · 4/5
```
detail of a stone mushroom table lamp and a bowl on an oak console in front of linen curtains, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

## Бутик-отель «Тишина»
Коммерческие помещения · Светлогорск, Калининградская область · 2025

### Обложка — Номер с креслом у окна и видом на море
Файл: `public/photos/otel-tishina-01.jpg` · 4/5
```
boutique hotel room by the Baltic sea, lounge chair by a large window with a sea view, hand-applied plaster walls, ash wood bed frame, linen bedding, no television, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

### Лобби-гостиная с камином и общим столом
Файл: `public/photos/otel-tishina-02.jpg` · 3/2
```
hotel lobby designed as a living room, open fireplace, long communal ash wood table, bookshelves, slate floor, linen sofas, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

### Ванная из сланца и штукатурки
Файл: `public/photos/otel-tishina-03.jpg` · 4/5
```
hotel bathroom with slate floor and plaster walls, freestanding stone bathtub under a small window, ceramic accessories, linen towels, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

### Коридор с мягким светом
Файл: `public/photos/otel-tishina-04.jpg` · 3/2
```
quiet hotel corridor with textured plaster walls, recessed soft lighting, ash wood doors, natural wool runner, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

## Лофт на Берсеневской
Квартиры · Москва · 2024

### Обложка — Двусветная гостиная с побелённым кирпичом
Файл: `public/photos/loft-na-bersenevskoy-01.jpg` · 4/5
```
double-height loft living room in a former factory, whitewashed brick walls, exposed steel beams, large industrial windows, low dark-stained oak volumes, wool rug, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

### Кухня, спрятанная в стену из дуба
Файл: `public/photos/loft-na-bersenevskoy-02.jpg` · 3/2
```
kitchen hidden behind a wall of dark-stained oak handleless fronts, microcement floor and island, factory windows, steel beams overhead, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

### Антресоль со спальней
Файл: `public/photos/loft-na-bersenevskoy-03.jpg` · 4/5
```
mezzanine bedroom above a library in a loft, steel railing, whitewashed brick, low bed with grey linen, view down to the living space, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

### Библиотека под антресолью
Файл: `public/photos/loft-na-bersenevskoy-04.jpg` · 3/2
```
built-in oak library shelves under a mezzanine, reading chair, warm lamp light, microcement floor, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

## Ресторан «Север»
Коммерческие помещения · Санкт-Петербург · 2024

### Обложка — Зал ресторана с открытой кухней
Файл: `public/photos/restoran-sever-01.jpg` · 3/2
```
Nordic restaurant dining room with an open kitchen and a long solid grey granite counter, pine wood tables, warm dim lighting, each table individually lit, linen textiles, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

### Камерная зона с банкеткой
Файл: `public/photos/restoran-sever-02.jpg` · 4/5
```
intimate restaurant booth with a pine wood partition, grey linen upholstered banquette, small round table, blackened brass wall light, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

### Барная стойка из гранита
Файл: `public/photos/restoran-sever-03.jpg` · 3/2
```
bar counter made of a single block of grey granite, tinted glass shelves, pine stools, moody warm lighting, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

### Сервировка на столе из сосны
Файл: `public/photos/restoran-sever-04.jpg` · 4/5
```
detail of a pine dining table with handmade ceramic plates, linen napkin, candle, soft shadow, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

## Дом на берегу
Частные дома · Карелия · 2023

### Обложка — Дом из бруса на скалистом берегу озера
Файл: `public/photos/dom-na-beregu-01.jpg` · 3/2
```
single-storey timber house on a rocky lakeshore in Karelia, long wooden terrace facing the water, pine forest, overcast soft light, exterior view, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

### Гостиная с видом на озеро
Файл: `public/photos/dom-na-beregu-02.jpg` · 4/5
```
living room of a timber lake house, glued laminated timber walls, wide window onto a calm lake, low linen sofa, granite stone hearth, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

### Терраса и причал
Файл: `public/photos/dom-na-beregu-03.jpg` · 3/2
```
wooden terrace leading to a small jetty on a still lake, two simple wooden lounge chairs, misty morning, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

### Спальня из дерева и льна
Файл: `public/photos/dom-na-beregu-04.jpg` · 4/5
```
all-wood bedroom in a lake house, linen bedding, handmade ceramic lamp, small square window with a lake view, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

## Шоурум «Глина»
Коммерческие помещения · Москва · 2023

### Обложка — Шоурум керамики с постаментами из штукатурки
Файл: `public/photos/shourum-glina-01.jpg` · 3/2
```
ceramics showroom like a gallery, plinths made of clay-toned plaster growing out of the floor, handmade vases and bowls, microcement floor, diffused ceiling light, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

### Керамика на постаменте в луче света
Файл: `public/photos/shourum-glina-02.jpg` · 4/5
```
single handmade ceramic vessel on a clay-toned plaster plinth, narrow beam of light, soft shadows, plaster wall, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

### Мастерская за стеклянной перегородкой
Файл: `public/photos/shourum-glina-03.jpg` · 3/2
```
pottery workshop seen through a glass partition, potter wheels, oak work tables, shelves of drying clay pieces, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

### Стеллаж с изделиями
Файл: `public/photos/shourum-glina-04.jpg` · 4/5
```
oak and stainless steel shelving with rows of handmade ceramic cups and plates, clay-toned plaster wall, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

## Спа «Красная Поляна»
Коммерческие помещения · Сочи, Красная Поляна · 2025

### Обложка — Бассейн с видом на горный хребет
Файл: `public/photos/spa-krasnaya-polyana-01.jpg` · 3/2
```
indoor spa pool clad in pale limestone mosaic, panoramic window onto a mountain ridge, linen loungers, calm water reflections, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

### Хаммам из каменной мозаики
Файл: `public/photos/spa-krasnaya-polyana-02.jpg` · 4/5
```
hammam with pale stone mosaic, heated stone bench, domed ceiling with small round skylights, steam, soft light, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

### Зона отдыха из термососны
Файл: `public/photos/spa-krasnaya-polyana-03.jpg` · 3/2
```
spa relaxation room with thermo-pine slatted walls, low daybeds with linen, terracotta vessels, view of mountains, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

### Сауна с панорамным окном
Файл: `public/photos/spa-krasnaya-polyana-04.jpg` · 4/5
```
sauna with thermo-pine benches and a panoramic window to snowy mountains, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

## Офис «Линия»
Коммерческие помещения · Москва · 2023

### Обложка — Кухня офиса с общим столом
Файл: `public/photos/ofis-liniya-01.jpg` · 3/2
```
office kitchen like a home, long oak communal table, oak slat ceiling, warm white walls, pendant lights, plants, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

### Библиотека для тихой работы
Файл: `public/photos/ofis-liniya-02.jpg` · 4/5
```
quiet office library, oak bookshelves, wool carpet, two armchairs and a reading lamp, acoustic felt panels, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

### Переговорная с мягкой мебелью
Файл: `public/photos/ofis-liniya-03.jpg` · 3/2
```
meeting room with a soft sofa and armchairs instead of a conference table, oak slat walls, graphite accents, linen curtains, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 3:2
```

### Рабочее место у окна
Файл: `public/photos/ofis-liniya-04.jpg` · 4/5
```
single oak desk by a large window, aluminium task lamp, wool rug, neatly hidden cables, soft minimalist interior, calm and quiet atmosphere, diffused natural daylight, muted warm-neutral palette of off-white, sand, greige and charcoal, natural materials, editorial architectural photography, medium format camera, 35mm lens, eye-level, straight verticals, no people, no text, photorealistic --ar 4:5
```

