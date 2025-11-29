export default function RichTextAtom({
  text,
  className,
}: {
  text: string | null | undefined
  className?: string
}) {
  if (!text) return null
  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: text }} />
  )
}
