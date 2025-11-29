import { filterOption, ISort } from '@/types/filter'
import { InputActionMeta, MultiValue, SingleValue } from 'react-select'

export interface SelectAtomProps {
  options: filterOption[] | ISort[]
  value?:
    | SingleValue<filterOption>
    | MultiValue<filterOption>
    | SingleValue<ISort>
    | SingleValue<{ value: number; label: any }>
    | null
  isMulti?: boolean
  isSearchable?: boolean
  isPrimaryTheme?: boolean
  placeholder: string
  selectClassName?: string
  className?: string
  onChange: (value: any) => void
  onInputChange?: (newValue: string, actionMeta: InputActionMeta) => void
  name?: string
  errorMsg?: string
  prefix?: string
  CustomOptionComponent?: React.ComponentType<{
    data: filterOption
    innerRef: React.Ref<HTMLDivElement>
    innerProps: React.HTMLAttributes<HTMLDivElement>
  }>
  hidePlaceholderOnFocus?: boolean
}
