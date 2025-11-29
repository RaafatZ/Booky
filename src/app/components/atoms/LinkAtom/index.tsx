import Link from 'next/link'

export default function LinkAtom({
  href,
  title,
  className,
  color,
  target,
  onClick,
}: {
  href: string
  title: string
  className?: string
  color?: string
  target?: string
  onClick?: (e: React.MouseEvent) => void
}) {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e)
    }
  }
  return (
    <Link href={href} style={{ color }} target={target} onClick={handleClick}>
      <p className={className}>{title}</p>
    </Link>
  )
}
