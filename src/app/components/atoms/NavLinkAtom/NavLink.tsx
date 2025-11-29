import styles from './NavLink.module.scss';
import arrow from "@/assets/icons/Vector.svg";
import Image from "next/image";

interface NavLinkProps {
    title?: string;
    onMouseEnter?: (e: React.MouseEvent<HTMLElement>) => void;
    onMouseLeave?: (e: React.MouseEvent<HTMLLIElement>) => void;
}

export const NavLink: React.FC<NavLinkProps> = ({ title, onMouseEnter, onMouseLeave }) => {
    return (
        <li className={styles.NavLinkItem} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <h2>{title}</h2>
            <Image src={arrow} alt="arrow icon" className={styles.arrow} />
        </li>
    );
};
