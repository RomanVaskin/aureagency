import Image from 'next/image'

/** Wordmark in public/aure-logo.svg (viewBox 2850 × 300). light — белый вариант поверх фото. */
export function Logo({
  className = '',
  height = 22,
  light = false,
}: {
  className?: string
  height?: number
  light?: boolean
}) {
  return (
    <Image
      src="/aure-logo.svg"
      alt="AURE AGENCY"
      width={height * (2850 / 300)}
      height={height}
      priority
      className={`transition-[filter] duration-500 ${light ? 'brightness-0 invert' : ''} ${className}`}
      style={{ height, width: 'auto' }}
    />
  )
}
