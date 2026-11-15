import fs from 'node:fs'
import path from 'node:path'

/**
 * Ищет загруженное фото для пути из данных сайта. В данных путь записан с .jpg,
 * но файл можно загрузить и как .jpeg, .png или .webp (в любом регистре) —
 * вернётся путь к тому, что реально лежит в public/. Нет файла — null.
 */
const EXT = ['.jpg', '.jpeg', '.png', '.webp', '.JPG', '.JPEG', '.PNG', '.WEBP']
const cache = new Map<string, string | null>()

export function findPhoto(src: string): string | null {
  if (cache.has(src)) return cache.get(src)!
  const base = src.replace(/\.(jpe?g|png|webp)$/i, '')
  const found = EXT.map((e) => base + e).find((p) => fs.existsSync(path.join(process.cwd(), 'public', p))) ?? null
  cache.set(src, found)
  return found
}
