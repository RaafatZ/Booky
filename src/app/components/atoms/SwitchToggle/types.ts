export interface SwitchToggleProps {
  name: string
  label: string
  isOn: boolean
  onChange: (isChecked: boolean) => void
}
