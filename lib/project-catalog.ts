import { findPhoto } from './photo'
import { PROJECTS } from './projects'

const PROJECT_ORDER = [
  'restoran-leningradskaya-oblast',
  'apartamenty-serbiya',
  'rekonstruktsiya-restorana',
  'kvartira-na-patriarshih',
  'dzen-spa',
  'penthaus-vorobevy-gory',
]
const projectRank = new Map(PROJECT_ORDER.map((slug, index) => [slug, index]))

export function getVisibleProjects() {
  return PROJECTS
    .filter(({ images: [cover] }) => cover && findPhoto(cover.src))
    .sort((a, b) => (projectRank.get(a.slug) ?? PROJECT_ORDER.length) - (projectRank.get(b.slug) ?? PROJECT_ORDER.length))
}
