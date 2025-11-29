import React from 'react'
import PhoneInputWithCountrySelect from 'react-phone-number-input'
import 'react-phone-number-input/style.css' // Default styles for the PhoneInput library
import styles from './styles.module.scss'
import { useParams } from 'next/navigation'
import { Language } from '@/types/language'
import { useTranslation } from '@/app/i18n/client'
import { PhoneInputAtomProps } from './types'

const PhoneInputAtom = ({
  name,
  label,
  value,
  onChange,
  error,
  className,
  placeholder,
  suffix,
  onSuffixClick,
  disabled = false,
}: PhoneInputAtomProps) => {
  const lang = useParams().lng as Language
  const { t } = useTranslation(lang, 'global')

  const handleSuffixClick = () => {
    if (onSuffixClick) {
      onSuffixClick()
    }
  }

  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>

      <div
        className={`${styles.phoneInputContainer} ${disabled && styles.disabled} ${className}`}
      >
        <PhoneInputWithCountrySelect
          name={name}
          value={value}
          onChange={onChange}
          defaultCountry={'EG'}
          placeholder={placeholder ? placeholder : t('ENTER_PHONE_NUMBER')}
          className={`${styles.phoneInput} ${error ? styles.errorBorder : ''} `}
          disabled={disabled}
        />

        {suffix && (
          <div className={styles.suffix} onClick={handleSuffixClick}>
            {suffix}
          </div>
        )}
      </div>

      {error && <div className={styles.error}>{error}</div>}
    </div>
  )
}

export default PhoneInputAtom
