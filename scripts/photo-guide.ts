// Собирает docs/photos.md — список всех фото сайта для общей папки public/photos.
// Запуск: node --experimental-strip-types scripts/photo-guide.ts
import fs from 'node:fs'
import path from 'node:path'
import { PROJECTS, SITE_IMAGES } from '../lib/projects.ts'
import { SLIDES, BLOCKS } from '../lib/home.ts'

const REPO = 'https://github.com/RomanVaskin/aureagency'
const BRANCH = 'preview'
type Row = { file: string; what: string; ratio: string }
const groups: { title: string; rows: Row[] }[] = []
const r = (x: string) => x.replace('/', ':')

const home: Row[] = []
SLIDES.forEach((s, i) => home.push({ file: s.image, what: `Слайдер на первом экране, кадр ${i + 1}`, ratio: '16:9 горизонтальное' }))
for (const b of BLOCKS) {
  if (b.kind === 'feature') home.push({ file: b.slide.image, what: 'Большой кадр на всю ширину между блоками', ratio: '16:9 горизонтальное' })
  else for (const row of b.rows) for (const c of row) home.push({ file: c.image, what: `Блок «${b.label}», карточка «${c.title}»`, ratio: c.span === 2 ? '3:2 горизонтальное' : '4:5 вертикальное' })
}
groups.push({ title: 'Главная', rows: home })
groups.push({ title: 'Услуги', rows: [SITE_IMAGES.studio, SITE_IMAGES.materials].map((im) => ({ file: im.src, what: im.alt, ratio: r(im.ratio) + (im.ratio === '4/5' ? ' вертикальное' : ' горизонтальное') })) })
for (const p of PROJECTS)
  groups.push({
    title: `Проект «${p.title}»`,
    rows: p.images.map((im, i) => ({ file: im.src, what: (i === 0 ? 'Обложка: ' : '') + im.alt, ratio: r(im.ratio) + (im.ratio === '4/5' ? ' вертикальное' : ' горизонтальное') })),
  })

const total = groups.reduce((n, g) => n + g.rows.length, 0)
const out: string[] = []
out.push('# Фото для сайта EOS Bureau')
out.push('')
out.push(`Все фото сайта — в **одной папке** [\`public/photos\`](${REPO}/tree/${BRANCH}/public/photos) (ветка \`preview\`).`)
out.push('')
out.push(`**[➜ Загрузить фото в папку](${REPO}/upload/${BRANCH}/public/photos)**`)
out.push('')
out.push('1. Назовите файл как в таблице ниже, например `kvartira-na-patriarshih-01.jpg`. Подходят `.jpg`, `.jpeg`, `.png`, `.webp`.')
out.push('2. Откройте ссылку «Загрузить», перетащите файлы (можно все сразу, до 100 штук).')
out.push('3. Внизу оставьте **Commit directly to the `preview` branch** и нажмите **Commit changes**.')
out.push('')
out.push('Через ~2 минуты фото появятся на preview.aureagency.ru вместо серых заглушек. Файлы с другими именами сайт не увидит — их можно просто переименовать.')
out.push('')
out.push(`Всего мест под фото: ${total}. Промпты для генерации — в [\`docs/image-prompts.md\`](image-prompts.md).`)
out.push('')
for (const g of groups) {
  out.push(`## ${g.title}`)
  out.push('')
  out.push('| Имя файла | Что на фото | Формат |')
  out.push('|---|---|---|')
  for (const x of g.rows) out.push(`| \`${path.basename(x.file)}\` | ${x.what} | ${x.ratio} |`)
  out.push('')
}
fs.writeFileSync('docs/photos.md', out.join('\n'))
console.log(`${total} photos listed`)
