import { FloatButton } from 'antd';
import Icon from '@/assets/icons/Chat.svg';
import Image from 'next/image';
import styles from '@/app/components/atoms/components/Atoms/FloatButton/FloatIcon.module.scss'
export default function FloatIcon() {
    return (
        <FloatButton icon={
            <Image src={Icon} alt="chat" width={32} height={32} />
        } className={styles.FloatIcon} />
    )
}
