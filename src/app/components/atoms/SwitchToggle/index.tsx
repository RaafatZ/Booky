import styles from './styles.module.scss'
import { SwitchToggleProps } from './types'
import { FaCheck } from 'react-icons/fa' // Import check icon

const SwitchToggle = ({ name, label, isOn, onChange }: SwitchToggleProps) => {
  return (
    <div className={styles.toggleContainer}>
      <span className={styles.toggleLabel}>{label}</span>

      <label className={`${styles.switch} ${isOn ? styles.checked : ''}`}>
        <input
          type="checkbox"
          name={name}
          checked={isOn}
          onChange={(e) => onChange(e.target.checked)}
          className={styles.toggleInput}
        />

        {isOn && (
          <span className={styles.checkIcon}>
            <FaCheck size={10} color="white" />
          </span>
        )}
      </label>
    </div>
  )
}

export default SwitchToggle
