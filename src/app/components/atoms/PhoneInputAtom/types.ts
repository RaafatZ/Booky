export interface PhoneInputAtomProps {
  name: string
  label?: string
  value: string | undefined
  onChange: (value: string | undefined) => void
  error?: string
  className?: string
  placeholder?: string
  suffix?: React.ReactNode
  onSuffixClick?: () => void
  disabled?: boolean
}
