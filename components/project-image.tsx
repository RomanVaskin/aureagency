import fs from 'node:fs'
import path from 'node:path'
import type { Ratio } from '@/lib/projects'

/** Тона заглушек: тёплые нейтральные из палитры сайта (#F3F3F1 и темнее). */
const TONES = ['#F3F3F1', '#E8E8E5', '#DCDBD6', '#CFCDC7']
const LINE = ['#D6D5D0', '#CBCAC5', '#BDBCB6', '#AFADA7']

const ASPECT: Record<Ratio, string> = {
  '4/5': 'aspect-[4/5]',
  '3/2': 'aspect-[3/2]',
  '16/9': 'aspect-[16/9]',
  '1/1': 'aspect-square',
}

const exists = new Map<string, boolean>()
function hasFile(src: string) {
  if (!exists.has(src)) exists.set(src, fs.existsSync(path.join(process.cwd(), 'public', src)))
  return exists.get(src)!
}

/**
 * Фото из public/ или, пока его нет, спокойная заглушка с линейным эскизом комнаты.
 * Проверка идёт на сервере при сборке, поэтому достаточно положить файл по пути src.
 */
export function ProjectImage({
  src,
  alt,
  ratio,
  tone = 0,
  variant = 0,
  className = '',
  imgClassName = '',
  priority = false,
  fill = false,
}: {
  src: string
  alt: string
  ratio: Ratio
  tone?: number
  variant?: number
  className?: string
  imgClassName?: string
  priority?: boolean
  /** Растянуть на родителя вместо собственного соотношения сторон */
  fill?: boolean
}) {
  const box = `relative overflow-hidden ${fill ? 'h-full w-full' : ASPECT[ratio]} ${className}`

  if (hasFile(src)) {
    return (
      <div className={box}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
        />
      </div>
    )
  }

  const t = tone % TONES.length
  return (
    <div className={box} style={{ backgroundColor: TONES[t] }} role="img" aria-label={alt}>
      <Sketch variant={variant % 4} stroke={LINE[t]} className={`absolute inset-0 h-full w-full ${imgClassName}`} />
    </div>
  )
}

/** Четыре минималистичных эскиза интерьера тонкой линией. */
function Sketch({ variant, stroke, className }: { variant: number; stroke: string; className: string }) {
  const common = { fill: 'none', stroke, strokeWidth: 1.2, vectorEffect: 'non-scaling-stroke' as const }
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden>
      {/* линия пола */}
      <line x1="0" y1="225" x2="400" y2="225" {...common} />
      {variant === 0 && (
        <>
          <rect x="215" y="55" width="120" height="170" {...common} />
          <line x1="275" y1="55" x2="275" y2="225" {...common} />
          <path d="M60 225 V196 H180 V225 M60 196 V184 H180 V196" {...common} />
          <rect x="90" y="208" width="48" height="10" {...common} />
        </>
      )}
      {variant === 1 && (
        <>
          <path d="M160 225 V100 A40 40 0 0 1 240 100 V225" {...common} />
          <path d="M70 225 V205 H130 V225" {...common} />
          <line x1="300" y1="225" x2="300" y2="140" {...common} />
          <path d="M285 140 H315 L308 120 H292 Z" {...common} />
        </>
      )}
      {variant === 2 && (
        <>
          <rect x="40" y="60" width="90" height="120" {...common} />
          <rect x="150" y="60" width="90" height="120" {...common} />
          <path d="M210 225 V200 H360 V225" {...common} />
          <line x1="230" y1="200" x2="230" y2="180" {...common} />
          <line x1="340" y1="200" x2="340" y2="180" {...common} />
          <line x1="230" y1="180" x2="340" y2="180" {...common} />
        </>
      )}
      {variant === 3 && (
        <>
          <line x1="0" y1="70" x2="400" y2="70" {...common} />
          <rect x="120" y="150" width="160" height="12" {...common} />
          <line x1="140" y1="162" x2="140" y2="225" {...common} />
          <line x1="260" y1="162" x2="260" y2="225" {...common} />
          <circle cx="200" cy="138" r="9" {...common} />
          <line x1="200" y1="70" x2="200" y2="105" {...common} />
          <path d="M186 105 H214 L208 118 H192 Z" {...common} />
        </>
      )}
    </svg>
  )
}
