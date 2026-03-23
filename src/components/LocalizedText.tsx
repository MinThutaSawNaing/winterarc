import type { ElementType, ReactNode } from 'react'

type LocalizedTextProps = {
  as?: ElementType
  className?: string
  en: ReactNode
  my: ReactNode
}

export default function LocalizedText({
  as: Component = 'span',
  className,
  en,
  my,
}: LocalizedTextProps) {
  return (
    <Component className={className}>
      <span className="lang-en">{en}</span>
      <span className="lang-my">{my}</span>
    </Component>
  )
}
