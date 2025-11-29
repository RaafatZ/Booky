import React from 'react'
import styles from './styles.module.scss'

export default function ColorfulTextAtom({
  text,
  customClassContainer,
  spanParts = [],
}: {
  text?: string
  fontSize?: string
  color?: string
  customClassContainer?: string
  spanParts?: { spanText: string; spanClass?: string }[]
}) {
  return (
    <p className={`${styles.container} ${customClassContainer}`}>
      {text && <h4>{text}</h4>}

      {spanParts.map((part, index) => (
        <span key={index} className={`${styles.spanStyle} ${part.spanClass}`}>
          {part.spanText}
          {index !== spanParts.length - 1 && <>&nbsp;</>}
        </span>
      ))}
    </p>
  )
}
