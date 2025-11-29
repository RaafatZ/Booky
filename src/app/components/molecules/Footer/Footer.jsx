import styles from "./Footer.module.scss";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import PatternWave from "./../../atoms/socialAtom/wave";

export default function Footer() {
  return (
    <div className={styles.container}>
      <PatternWave />
      <div className={styles.FooterWrapper}>
        <div className={styles.infoBox}>
          <h1>
            Book<span>y</span>
          </h1>
          <p>
            Welcome to your go-to online books library for discovering
            captivating reads across all genres. We make it easy for you to buy
            your next favorite book.
          </p>
          <ul className={styles.Social}>
            <li>
              <Instagram className={styles.icon} strokeWidth={3} />
            </li>
            <li>
              <Youtube className={styles.icon} strokeWidth={3} />
            </li>
            <li>
              <Twitter className={styles.icon} strokeWidth={3} />
            </li>
            <li>
              <Facebook className={styles.icon} strokeWidth={3} />
            </li>
          </ul>
        </div>
        <div className={styles.listBox}>
          <ul>
            <h1>Navigation</h1>
            <li>
              <a href="#SliderSection">New Arrivals</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>

            <li>
              <a href="#newsSection">Latest News</a>
            </li>
            <li>
              <a href="">Contact us</a>
            </li>
          </ul>
          <ul>
            <h1>Books</h1>
            <li>
              <a href="">Testmonials</a>
            </li>

            <li>
              <a href="#SliderSection">Hot Books</a>
            </li>
            <li>
              <a href="#SliderSection">Trending Now</a>
            </li>
            <li>
              <a href="/books">All Books</a>
            </li>
          </ul>
        </div>
        <div className={styles.contactBox}>
          <h1>Need Help?</h1>
          <span>+20 01012011015</span>
          <p>
            Monday – Friday: 9:00-20:00
            <span>Saturday: 11:00 – 15:00</span>
          </p>
          <a href="">Booky.help@email.com</a>
        </div>
        <span className={styles.copyRight}>
          <p>© Created by ....</p>
          <p>All rights Reserved</p>
        </span>
      </div>
    </div>
  );
}
