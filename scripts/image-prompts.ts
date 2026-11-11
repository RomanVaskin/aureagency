// Собирает docs/image-prompts.md из lib/projects.ts.
// Запуск: node --experimental-strip-types scripts/image-prompts.ts > docs/image-prompts.md
import { PROJECTS, SITE_IMAGES, PROMPT_STYLE, categoryLabel } from '../lib/projects.ts'

const out: string[] = []
out.push('# Промпты для изображений сайта')
out.push('')
out.push('Сайт уже работает без фотографий: на месте каждого кадра стоит спокойная заглушка в тон сайта.')
out.push('Чтобы заменить заглушку, сгенерируйте картинку по промпту и положите файл **точно по указанному пути** в `public/`.')
out.push('После следующей сборки (новый коммит в PR) фото появится само, код менять не нужно.')
out.push('')
out.push('**Советы**')
out.push('- Промпты на английском — так генераторы (Midjourney, ChatGPT/DALL·E, Flux, Kandinsky) понимают их точнее.')
out.push('- `--ar` в конце — соотношение сторон для Midjourney; в других сервисах выберите его в настройках и удалите этот хвост.')
out.push('- Сохраняйте в JPG шириной 2000–2400 px, качество ~80, чтобы сайт грузился быстро.')
out.push('- Общий стиль у всех промптов один, поэтому серия выглядит как работы одной студии:')
out.push('')
out.push('```')
out.push(PROMPT_STYLE)
out.push('```')
out.push('')
out.push('## Главная и студия')
out.push('')
for (const [k, im] of Object.entries(SITE_IMAGES)) {
  out.push(`### ${im.alt}`)
  out.push(`Файл: \`public${im.src}\` · ${im.ratio}`)
  out.push('```')
  out.push(im.prompt)
  out.push('```')
  out.push('')
}
for (const p of PROJECTS) {
  out.push(`## ${p.title}`)
  out.push(`${categoryLabel(p.category)} · ${p.location} · ${p.year}`)
  out.push('')
  p.images.forEach((im, i) => {
    out.push(`### ${i === 0 ? 'Обложка — ' : ''}${im.alt}`)
    out.push(`Файл: \`public${im.src}\` · ${im.ratio}`)
    out.push('```')
    out.push(im.prompt)
    out.push('```')
    out.push('')
  })
}
console.log(out.join('\n'))
