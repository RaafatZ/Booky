'use client';
import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import styles from '@/app/components/atoms/components/Atoms/Pinatom/pin.module.scss';

const Pin = () => {
    const controls = useAnimation();

    useEffect(() => {
        const animate = async () => {
            while (true) {
                await controls.start({
                    bottom: "100%",
                    transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                        delay: .3

                    }
                });
                await controls.start({
                    bottom: "0%",
                    transition: {
                        type: "spring",
                        stiffness: 70,
                        damping: 20,
                        delay: 2
                    }
                });
            }
        };
        animate();
    }, [controls]);

    return (
        <div className={styles.pinwrapper}>
            <motion.div className={styles.pinline}></motion.div>

            <motion.div
                className={styles.pinDot}
                initial={{ bottom: "0%" }}
                animate={controls}
            />
        </div>
    );
};

export default Pin;
