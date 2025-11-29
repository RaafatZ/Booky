"use client";

import Image from "next/image";
import styles from "./cardAtom.module.scss";
import type { FeatureCard } from "@/app/components/atoms/components/Atoms/FeaturesCardAtom/featureCardsType";

const FeatureCard: React.FC<FeatureCard> = ({
    icon,
    title,
    description,
    cornerIcon,
}) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <div className={styles.iconWrapper}>
                    <Image src={icon} alt={title} width={72} height={72} />
                </div>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.cornerIcon}>
                <Image src={cornerIcon} alt="Decoration" width={291.5} height={80} />
            </div>
        </div>
    );
};

export default FeatureCard;
