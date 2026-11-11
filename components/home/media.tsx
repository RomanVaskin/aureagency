import fs from 'node:fs'
import path from 'node:path'

/** Тёплые тона заглушек: светлые для ленты, тёмные для полноэкранных кадров под белым текстом. */
const LIGHT = ['#e3ddd1', '#d6cfc1', '#cbc3b4', '#ddd6c9']
const DARK = ['#6f665b', '#5d554b', '#7b7266', '#4f4840']

const cache = new Map<string, boolean>()
function exists(src: string) {
  if (!cache.has(src)) cache.set(src, fs.existsSync(path.join(process.cwd(), 'public', src)))
  return cache.get(src)!
}

/** Фото, если файл уже лежит в public/, иначе однотонная заглушка. Заполняет родителя. */
export function Media({
  src,
  alt = '',
  tone = 0,
  dark = false,
  priority = false,
  className = '',
}: {
  src: string
  alt?: string
  tone?: number
  dark?: boolean
  priority?: boolean
  className?: string
}) {
  if (exists(src)) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={`absolute inset-0 h-full w-full object-cover ${className}`}
      />
    )
  }
  const tones = dark ? DARK : LIGHT
  return <div aria-hidden className={`absolute inset-0 ${className}`} style={{ backgroundColor: tones[tone % tones.length] }} />
}
