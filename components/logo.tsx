/**
 * Надпись-логотип EOS Bureau. Набрана шрифтом сайта (Jost), поэтому сама берёт цвет
 * текста: тёмная на светлом фоне, белая над фото и на тёмных страницах.
 * height — примерная высота заглавных букв в пикселях (как у прежнего логотипа-картинки).
 */
export function Logo({
  className = '',
  height = 22,
}: {
  className?: string
  height?: number
  /** Оставлено для совместимости: цвет теперь наследуется от текста */
  light?: boolean
}) {
  return (
    <span
      className={`inline-block whitespace-nowrap font-sans font-light uppercase leading-none ${className}`}
      style={{ fontSize: Math.round(height * 1.4), letterSpacing: '0.16em' }}
    >
      EOS Bureau
    </span>
  )
}
