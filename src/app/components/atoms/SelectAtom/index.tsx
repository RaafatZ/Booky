'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import Select from 'react-select'
import styles from './styles.module.scss'
import { SelectAtomProps } from './types'

const SelectAtom = ({
  isMulti = false,
  options,
  value,
  isSearchable,
  placeholder,
  className,
  selectClassName,
  onChange,
  onInputChange,
  name = '',
  errorMsg = '',
  prefix = '',
  CustomOptionComponent,
  isPrimaryTheme = true,
  hidePlaceholderOnFocus = false,
}: SelectAtomProps) => {
  const [isFocused, setIsFocused] = useState(false)

  // Custom Chip Component
  const CustomChip = ({ data, removeProps }: any) => {
    return (
      <div
        className={`${styles.customPrimaryChipContainer} ${
          !isPrimaryTheme ? styles.customChipContainer : ''
        }`}
      >
        <label>{data.label}</label>

        {!isPrimaryTheme && data?.type && (
          <div className={styles.customChipType}>
            <span>{data.type}</span>
          </div>
        )}

        <button {...removeProps} className={styles.removeButton}>
          x
        </button>
      </div>
    )
  }

  // Override the ClearIndicator component to hide the "×" icon in the input
  const CustomClearIndicator = () => null

  return (
    <>
      <div
        className={`${styles.select_container} ${errorMsg ? styles.errorContainer : ''} ${className} `}
      >
        {prefix && (
          <Image
            className={styles.prefix}
            src={prefix}
            width={24}
            height={24}
            alt="red"
            objectFit="contain"
          />
        )}
        <Select
          instanceId={name || 'select-atom-instance'}
          name={name}
          classNamePrefix="select-filter"
          placeholder={hidePlaceholderOnFocus && isFocused ? '' : placeholder}
          options={options}
          value={value}
          isSearchable={isSearchable}
          onChange={onChange}
          className={`${styles.select} ${selectClassName}`}
          onInputChange={onInputChange}
          isMulti={isMulti}
          // menuIsOpen
          closeMenuOnSelect={!isMulti}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          components={{
            // ClearIndicator: isPrimaryTheme
            //   ? components.ClearIndicator
            //   : CustomClearIndicator,

            MultiValue: CustomChip, // Override the default chip with your custom chip
            ...(CustomOptionComponent
              ? {
                  DropdownIndicator: null,
                  Option:
                    CustomOptionComponent as unknown as React.ComponentType<any>,
                }
              : {}),
          }}
        />

        {isSearchable && (
          <div className={styles.icon}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 20.0005C15.9706 20.0005 20 15.9711 20 11.0005C20 6.02993 15.9706 2.00049 11 2.00049C6.02944 2.00049 2 6.02993 2 11.0005C2 15.9711 6.02944 20.0005 11 20.0005Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.9304 20.6898C19.4604 22.2898 20.6704 22.4498 21.6004 21.0498C22.4504 19.7698 21.8904 18.7198 20.3504 18.7198C19.2104 18.7098 18.5704 19.5998 18.9304 20.6898Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>
      {errorMsg ? <p className="errorMsg">{errorMsg}</p> : null}
    </>
  )
}

export default SelectAtom
