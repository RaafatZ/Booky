'use client'

import React from 'react'

export default function TitleAtom({
  text,
  className,
  color,
}: {
  text: string
  className?: string
  color?: string
}) {
  return (
    <h1 className={className} style={{ color: `var(${color})` }}>
      {text}
    </h1>
  )
}
