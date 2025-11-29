import React from 'react'
import arrow from "@/assets/icons/Vector.svg";
import flag from "@/assets/images/Flags/EG.png";
import Image from "next/image";
import styles from '@/app/components/atoms/components/Atoms/CTAsAtom/CTAs.module.scss'
import { FlipButton } from '../ButtonAtom/DynamicButton';

export default function CTAs() {
    return (
        <div className={styles.CTAsBox}>
            <div className={styles.CTAs}>
                <button className={styles.logIn}>Log in</button>
                <FlipButton headColor='white' tailColor='black' width={150} height={40} >Sign Up Free</FlipButton>
            </div>
            <div className={styles.language}>
                <span>
                    <h3>EN</h3>
                    <Image src={arrow} alt="arrow icon" className={styles.arrow} />

                </span>
                <span>
                    <Image src={flag} alt="Egypt flag" className={styles.flag} />
                    <Image src={arrow} alt="arrow icon" className={styles.arrow} />

                </span>
            </div>
        </div>
    )
}
