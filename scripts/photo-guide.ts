// Создаёт папки для фото в public/images и собирает docs/photos.md из данных сайта.
// Запуск: node --experimental-strip-types scripts/photo-guide.ts
import fs from 'node:fs'
import path from 'node:path'
import { PROJECTS, SITE_IMAGES } from '../lib/projects.ts'
import { SLIDES, BLOCKS } from '../lib/home.ts'

const REPO = 'https://github.com/RomanVaskin/aureagency'
const BRANCH = 'preview'
type Row = { file: string; what: string; ratio?: string }
const groups: { title: string; dir: string; rows: Row[] }[] = []

const home: Row[] = []
SLIDES.forEach((s, i) => home.push({ file: s.image, what: `Главная · слайдер, кадр ${i + 1}`, ratio: '16:9, горизонтальное' }))
for (const b of BLOCKS) {
  if (b.kind === 'feature') home.push({ file: b.slide.image, what: 'Главная · полноэкранный кадр между блоками', ratio: '16:9, горизонтальное' })
  else for (const row of b.rows) for (const c of row) home.push({ file: c.image, what: `Главная · блок «${b.label}», ${c.title}`, ratio: c.span === 2 ? '3:2, горизонтальное' : '4:5, вертикальное' })
}
groups.push({ title: 'Главная страница', dir: 'images/home', rows: home })
groups.push({
  title: 'Студия и услуги',
  dir: 'images/studio',
  rows: [SITE_IMAGES.studio, SITE_IMAGES.materials].map((im) => ({ file: im.src, what: im.alt, ratio: im.ratio.replace('/', ':') })),
})
for (const p of PROJECTS)
  groups.push({
    title: `Проект «${p.title}»`,
    dir: `images/projects/${p.slug}`,
    rows: p.images.map((im, i) => ({ file: im.src, what: (i === 0 ? 'Обложка: ' : '') + im.alt, ratio: im.ratio.replace('/', ':') })),
  })

for (const g of groups) {
  const d = path.join('public', g.dir)
  fs.mkdirSync(d, { recursive: true })
  const keep = path.join(d, '.gitkeep')
  if (!fs.readdirSync(d).some((f) => f !== '.gitkeep')) fs.writeFileSync(keep, '')
}

const out: string[] = []
out.push('# Фото для сайта AURE')
out.push('')
out.push('Все фотографии сайта лежат в папке [`public/images`](' + `${REPO}/tree/${BRANCH}/public/images` + ') ветки `preview`.')
out.push('Пока файла нет, на его месте показывается светлая заглушка. Как только фото загружено с нужным именем, оно появляется на preview.aureagency.ru после автоматического деплоя (~2 минуты).')
out.push('')
out.push('## Как загрузить')
out.push('')
out.push('1. Откройте ссылку «Загрузить» у нужной папки ниже (откроется GitHub, ветка `preview`).')
out.push('2. Перетащите файлы в окно. **Имя файла должно совпадать с таблицей**, например `01.jpg`. Расширение может быть `.jpg`, `.jpeg`, `.png` или `.webp`.')
out.push('3. Внизу выберите **Commit directly to the `preview` branch** и нажмите **Commit changes**.')
out.push('')
out.push('Советы: ширина 2000–2400 px, JPG качество ~80 (обычно 300–800 КБ). Через сайт GitHub — до 25 МБ на файл и до 100 файлов за раз.')
out.push('Промпты для генерации кадров — в [`docs/image-prompts.md`](image-prompts.md).')
out.push('')
for (const g of groups) {
  out.push(`## ${g.title}`)
  out.push('')
  out.push(`Папка: \`public/${g.dir}\` · [Загрузить](${REPO}/upload/${BRANCH}/public/${g.dir}) · [Открыть](${REPO}/tree/${BRANCH}/public/${g.dir})`)
  out.push('')
  out.push('| Файл | Что на фото | Формат |')
  out.push('|---|---|---|')
  for (const r of g.rows) out.push(`| \`${path.basename(r.file)}\` | ${r.what} | ${r.ratio ?? ''} |`)
  out.push('')
}
fs.writeFileSync('docs/photos.md', out.join('\n'))
console.log(groups.map((g) => `${g.dir}: ${g.rows.length}`).join('\n'))
