import React from 'react'
import styles from './styles.module.scss'
import { useParams } from 'next/navigation'
import { Language } from '@/types/language'
import { useTranslation } from '@/app/i18n/client'
import TextAtom from '../TextAtom'

const NoSearchAtom = ({ title = 'NO_RESULTS' }: { title?: string }) => {
  const lang = useParams().lng as Language
  const { t } = useTranslation(lang, 'global')

  return (
    <div className={styles.noDataContainer}>
      <TextAtom className={styles.noDataText} text={t(title)} />
    </div>
  )
}

export default NoSearchAtom
