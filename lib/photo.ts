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

/**
 * Настоящие размеры фото (ширина × высота) из заголовка файла — чтобы показать
 * кадр целиком в его пропорциях. Понимает JPEG и PNG; для остального — null.
 */
const sizes = new Map<string, { w: number; h: number } | null>()

export function photoSize(publicPath: string): { w: number; h: number } | null {
  if (sizes.has(publicPath)) return sizes.get(publicPath)!
  let out: { w: number; h: number } | null = null
  try {
    const b = fs.readFileSync(path.join(process.cwd(), 'public', publicPath))
    if (b[0] === 0x89 && b[1] === 0x50) {
      out = { w: b.readUInt32BE(16), h: b.readUInt32BE(20) }
    } else if (b[0] === 0xff && b[1] === 0xd8) {
      let i = 2
      while (i + 9 < b.length) {
        if (b[i] !== 0xff) { i++; continue }
        const m = b[i + 1]
        const len = b.readUInt16BE(i + 2)
        if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc) {
          out = { h: b.readUInt16BE(i + 5), w: b.readUInt16BE(i + 7) }
          break
        }
        i += 2 + len
      }
    }
  } catch {
    out = null
  }
  sizes.set(publicPath, out)
  return out
}
