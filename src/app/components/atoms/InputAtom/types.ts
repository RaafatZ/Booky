import { ChangeEvent } from 'react'

export interface InputProps {
  name: string
  label?: string
  type?: string
  min?: number | string
  max?: number | string
  errorMsg?: string | null
  placeholder?: string
  className?: string
  customClassContainer?: string
  value?: string
  onChange?: (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void
  suffix?: React.ReactNode
  prefix?: React.ReactNode
  onSuffixClick?: (
    event?: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void
  withStartLabel?: boolean
  hasLinkOption?: boolean
  linkOptionChildren?: React.ReactNode
  disabled?: boolean
  hasError?: boolean
  defaultValue?: string
  inputClassName?: string
  labelClassName?: string
}
