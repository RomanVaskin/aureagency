import { PROJECTS, categoryLabel, type Project, type Ratio } from './projects'
import { findPhoto } from './photo'
import { HOME_PICKS, type Block, type Card, type Slide } from './home'

/**
 * Подборка для главной из раздела «Проекты»:
 *  • только проекты, у которых уже лежат настоящие фото (заглушки не берутся);
 *  • главная карусель — по одному кадру от каждого такого проекта;
 *  • лента «Последние работы» — другой кадр тех же проектов, ни один снимок
 *    на странице не повторяется;
 *  • кадры — из HOME_PICKS, иначе обложка (карусель) и следующее фото (лента).
 * Новый проект с фото появляется на главной сам, без правки этой страницы.
 */
type Pick = { project: Project; src: string; alt: string; ratio: Ratio; position?: string }

const WIDE: Ratio[] = ['16/9', '3/2']

function photoAt(project: Project, n: number | undefined) {
  if (!n) return undefined
  const im = project.images[n - 1]
  return im && findPhoto(im.src) ? im : undefined
}

function picks(): { hero: Pick[]; grid: Pick[] } {
  const order = [...Object.keys(HOME_PICKS), ...PROJECTS.map((p) => p.slug).filter((s) => !(s in HOME_PICKS))]
  const hero: Pick[] = []
  const grid: Pick[] = []
  const used = new Set<string>()
  for (const slug of order) {
    const project = PROJECTS.find((p) => p.slug === slug)
    if (!project) continue
    const want = HOME_PICKS[slug]
    const h = photoAt(project, want?.hero ?? 1)
    if (!h || used.has(h.src)) continue
    used.add(h.src)
    hero.push({ project, src: h.src, alt: h.alt, ratio: h.ratio, position: want?.heroPosition })
    // для ленты — заданное фото или первое другое настоящее фото проекта
    const g =
      photoAt(project, want?.grid) ??
      project.images.map((_, i) => photoAt(project, i + 1)).find((im) => im && im.src !== h.src)
    if (g && !used.has(g.src)) {
      used.add(g.src)
      grid.push({ project, src: g.src, alt: g.alt, ratio: g.ratio, position: want?.gridPosition })
    }
  }
  return { hero, grid }
}

const city = (p: Project) => p.location.split(',')[0]

function toSlide(k: Pick): Slide {
  return { title: k.project.title, text: k.project.summary, image: k.src, href: `/projects/${k.project.slug}`, position: k.position }
}

function toCard(k: Pick, span: 1 | 2, start?: Card['start']): Card {
  return {
    title: k.project.title,
    text: k.project.summary,
    meta: [categoryLabel(k.project.category).toUpperCase(), city(k.project).toUpperCase(), String(k.project.year)],
    image: k.src,
    alt: k.alt,
    href: `/projects/${k.project.slug}`,
    span,
    start,
    position: k.position,
    ratio: k.ratio,
  }
}

/**
 * Раскладка: главная карусель — по кадру от каждого проекта; лента — вторые кадры
 * рядами в одну строку. Широкие кадры получают
 * широкие ячейки, вертикальные и детали — узкие; ряды чередуют
 * «широкий + узкие» и «узкие + широкий», одиночный остаток — кадр на всю ширину.
 */
export function composeHome(): { slides: Slide[]; blocks: Block[] } {
  const { hero, grid } = picks()
  const slides = hero.map(toSlide)
  let rest = grid

  const rows: Card[][] = []
  const features: Slide[] = []
  let flip = false
  while (rest.length) {
    const wide = rest.filter((k) => WIDE.includes(k.ratio))
    const narrow = rest.filter((k) => !WIDE.includes(k.ratio))
    let row: Card[]
    if (rest.length === 1) {
      features.push(toSlide(rest[0]))
      rest = []
      break
    } else if (rest.length === 2) {
      // широкий кадр + деталь в узкой ячейке со сдвигом (воздух между ними), либо два широких
      const a = wide[0] ?? rest[0]
      const b = rest.find((k) => k !== a)!
      if (WIDE.includes(b.ratio)) row = [toCard(a, 2), toCard(b, 2)]
      else row = flip ? [toCard(b, 1, 1), toCard(a, 2, 3)] : [toCard(a, 2, 1), toCard(b, 1, 4)]
      rest = []
    } else {
      // три кадра: один широкий и два узких (если узких мало — берём что есть)
      const w = wide[0] ?? rest[0]
      const others = [...narrow, ...wide.filter((k) => k !== w)].filter((k) => k !== w).slice(0, 2)
      row = flip ? [toCard(others[0], 1), toCard(others[1], 1), toCard(w, 2)] : [toCard(w, 2), toCard(others[0], 1), toCard(others[1], 1)]
      rest = rest.filter((k) => k !== w && !others.includes(k))
    }
    rows.push(row)
    flip = !flip
  }

  const blocks: Block[] = []
  if (rows.length) blocks.push({ kind: 'work', label: 'ПРОЕКТЫ', heading: 'Последние работы', rows })
  for (const f of features) blocks.push({ kind: 'feature', slide: f })
  return { slides, blocks }
}
