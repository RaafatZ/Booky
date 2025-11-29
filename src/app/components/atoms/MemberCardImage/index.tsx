import Image from 'next/image'
import styles from './styles.module.scss'
import TextAtom from '../TextAtom'
import { MemberCardProps } from './types'

export default function MemberCardImage({
  width = 300,
  height = 300,
  src,
  alt,
  name,
  role,
}: MemberCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.imageLayout} />
        <Image
          width={width}
          height={height}
          src={src}
          alt={alt}
          className={styles.img}
        />
      </div>

      <TextAtom text={name} className={`${styles.title}`} />

      <TextAtom text={role} className={`${styles.subtitle}`} />
    </div>
  )
}
