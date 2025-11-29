import TextAtom from '../TextAtom'
import styles from './styles.module.scss'

interface RadioButtonAtomProps {
  name: string
  options: { label: string; value: string }[]
  selectedValue: string
  onChange: (value: string) => void
  errorMsg?: string
  title: string
  customClassContainer?: string
}

const RadioButtonAtom = ({
  name,
  options,
  selectedValue,
  onChange,
  errorMsg,
  title,
  customClassContainer,
}: RadioButtonAtomProps) => {
  return (
    <div className={`${styles.container} ${customClassContainer}`}>
      <TextAtom text={title} className={styles.title} />

      <div className={styles.radioGroup}>
        {options.map((option) => (
          <label key={option.value} className={styles.radioLabel}>
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => onChange(option.value)}
              className={styles.radioInput}
            />
            <span className={styles.radioCustom}></span>
            {option.label}
          </label>
        ))}
      </div>
      {errorMsg ? <p className="errorMsg">{errorMsg}</p> : null}
    </div>
  )
}

export default RadioButtonAtom
