import { TextAtomProps } from './types'

export default function TextAtom({
  text,
  className,
  style,
  ...rest
}: TextAtomProps) {
  return (
    <p className={className} style={{ ...style }} {...rest}>
      {text}
    </p>
  )
}
