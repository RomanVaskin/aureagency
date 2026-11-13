import Image from 'next/image'

/** Wordmark in public/aure-logo.svg (viewBox 2850 × 300); used by the header and footer. */
export function Logo({
  className = '',
  height = 22,
}: {
  className?: string
  height?: number
}) {
  return (
    <Image
      src="/aure-logo.svg"
      alt="AURE AGENCY"
      width={height * (2850 / 300)}
      height={height}
      priority
      className={className}
      style={{ height, width: 'auto' }}
    />
  )
}
