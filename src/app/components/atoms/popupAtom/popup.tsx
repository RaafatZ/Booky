
import styles from './popup.module.scss';

interface PopupProps {
    children: React.ReactNode;
}

export const Popup: React.FC<PopupProps> = ({
    children,

}) => (
    <div className={styles.popup}>
        {children}
    </div>
);

