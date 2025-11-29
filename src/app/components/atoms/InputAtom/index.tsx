'use client'

import Image from 'next/image'
import React, { RefObject, useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'
import { InputProps } from './types'
const uploadIcon = '/Images/upload.png'

export default function Input({
  name,
  label,
  type = 'text',
  min,
  max,
  errorMsg = '',
  placeholder = '',
  className = '',
  onChange = () => {},
  suffix,
  prefix,
  value,
  withStartLabel = true,
  hasLinkOption = false,
  linkOptionChildren,
  disabled = false,
  defaultValue,
  hasError,
  onSuffixClick,
  inputClassName,
  labelClassName,
  customClassContainer,
}: InputProps) {
  const [isFouced, setIsFocued] = useState(false)
  const [fileName, setFileName] = useState<string>('')
  const inputRef = useRef() as RefObject<HTMLInputElement & HTMLTextAreaElement>
  const [browser, setBrowser] = useState('')
  const [currentType, setCurrentType] = useState(
    type === 'Password' ? 'Password' : type
  )

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setFileName(file.name)
    } else {
      setFileName('')
    }
  }

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  const handleSuffixClick = () => {
    if (onSuffixClick) {
      onSuffixClick()
    } else {
      setCurrentType((prevType) => (prevType === 'text' ? 'password' : 'text'))
    }
  }

  useEffect(() => {
    const userAgent = navigator.userAgent

    if (userAgent.includes('Chrome')) {
      setBrowser('Chrome')
    } else if (userAgent.includes('Firefox')) {
      setBrowser('Firefox')
    } else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
      setBrowser('Safari')
    } else if (userAgent.includes('Edge')) {
      setBrowser('Edge')
    } else if (userAgent.includes('MSIE') || userAgent.includes('Trident')) {
      setBrowser('Internet Explorer')
    } else {
      setBrowser('Unknown')
    }
  }, [])

  useEffect(() => {
    const isFoucsed = () => {
      setIsFocued(true)
    }

    const isBlurred = () => {
      if (inputRef?.current && !inputRef.current.value) {
        setIsFocued(false)
      }
    }

    const inputElement = inputRef.current

    if (inputElement) {
      inputElement.addEventListener('focus', isFoucsed)
      inputElement.addEventListener('blur', isBlurred)
    }

    return () => {
      if (inputElement) {
        inputElement.removeEventListener('focus', isFoucsed)
        inputElement.removeEventListener('blur', isBlurred)
      }
    }
  }, [])

  return (
    <div className={`${styles.container} ${customClassContainer}`}>
      {label && (
        <div>
          {hasLinkOption && (
            <div className={styles.linkOption}>{linkOptionChildren}</div>
          )}

          <div className={styles.labelContent}>
            {withStartLabel && <span className={styles.starLabel}>*</span>}

            <label
              htmlFor={name}
              className={`${type === 'date' ? styles.focused : isFouced ? styles.focused : ''} P3 ${labelClassName}`}
            >
              {label}
              {type === 'file' && (
                <Image
                  src={uploadIcon}
                  alt="uploadIcon"
                  width={24}
                  height={24}
                />
              )}
            </label>
          </div>
        </div>
      )}

      <div
        className={`${styles.input} ${isFouced ? styles.focused : ''} ${className} ${
          !!fileName && styles.fileNotEmpty
        }`}
        onClick={handleFocus}
      >
        {type === 'file' && (
          <>
            <input
              type="file"
              id={name}
              name={name}
              onChange={handleFileChange}
              className={`${styles.input_field} ${errorMsg ? styles.error : ''}`}
            />
            {fileName && <p className={styles.fileName}>{fileName}</p>}
          </>
        )}

        {type === 'textarea' && (
          <textarea
            id={name}
            name={name}
            value={value}
            defaultValue={defaultValue}
            className={`${isFouced ? styles.focused : ''} ${
              errorMsg && styles.error
            } ${prefix ? styles.inputStyleWithPrefix : ''} ${styles.textArea} ${className}`}
            ref={inputRef}
            placeholder={placeholder}
            onChange={onChange}
          />
        )}

        {(type === 'text' || type === 'Password' || type === 'number') && (
          <div>
            {prefix && <div className={styles.prefix}>{prefix}</div>}

            <input
              id={name}
              name={name}
              value={value}
              defaultValue={defaultValue}
              className={`${isFouced ? styles.focused : ''} ${
                (hasError || errorMsg) && styles.error
              } ${prefix ? styles.inputStyleWithPrefix : ''} ${className} ${inputClassName}`}
              ref={inputRef}
              type={currentType}
              min={min}
              max={max}
              placeholder={placeholder}
              onChange={onChange}
              disabled={disabled}
              inputMode={type === 'number' ? 'numeric' : undefined}
              pattern={type === 'number' ? '[0-9]*' : undefined}
            />

            {suffix && (
              <div className={styles.suffix} onClick={handleSuffixClick}>
                {suffix}
              </div>
            )}
          </div>
        )}
      </div>

      {errorMsg ? <p className="errorMsg">{errorMsg}</p> : null}
    </div>
  )
}
