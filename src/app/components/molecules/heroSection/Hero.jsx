import styles from "./Hero.module.scss";
import bg from "../../../../../public/Image/abstract-blur-beautiful-luxury-shopping-mall-center.jpg";
import image from "../../../../../public/Image/67164edc79127363c5ebc9bc_optimized_1156.webp";

import Image from "next/image";
import ButtonAtom from "./../../atoms/ButtonAtom/ButtonAtom";

export default function Hero() {
  return (
    <div
      className={styles.container}
      id="HeroSection"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className={styles.HeroContent}>
        <div className={styles.Titles}>
          <h2>Booky</h2>
          <h1>
            Stories That <span> Move You</span>
          </h1>
        </div>
        <div className={styles.paragraphs}>
          <p>
            <span>Huge Library: </span>
            Looking for a particular book? We most likely have it! Our library
            consists of 0040,0+ eBooks of different genres.
          </p>
          <p>
            <span>Instant Downloads: </span>No waiting! Download your chosen
            eBooks immediately and start reading on any device.
          </p>
        </div>
        <ButtonAtom>
          <a href="/Books">Discover Now</a>
        </ButtonAtom>
      </div>
      <div className={styles.imageContainer}>
        <Image src={image} alt="bg" width={600} height={600} />
      </div>
    </div>
  );
}
