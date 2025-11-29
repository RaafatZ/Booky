import imag from "../../../../../public/Image/67110c35720ef6f03b163d17_optimized_987_c987x1315-0x0.webp";
import icon1 from "../../../../../public/Icons/006-student.svg";
import icon2 from "../../../../../public/Icons/017-onlineEducation.svg";
import icon3 from "../../../../../public/Icons/018-shoppingCart.svg";
import { ChevronRight } from "lucide-react";
import styles from "./Features.module.scss";
import Image from "next/image";
import bg from "../../../../../public/Image/bgTest3.png";
export default function Features() {
  return (
    <div className={styles.featuresContainer} id="FeaturesSection">
      <div className={styles.featuresBox}>
        <Image src={imag} alt="Features img" width={453} height={481} />
        <div
          className={styles.featuresContant}
          style={{ backgroundImage: `url(${bg.src})` }}
        >
          <h1>READ THEM</h1>
          <h2>Trending Titles</h2>
          <h3>Grab Best-Selling Books!</h3>
          <p>Discover the most popular books of 2024.</p>
          <span>
            <a href="">Discover Now</a>
            <ChevronRight className={styles.Icon} />
          </span>
        </div>
      </div>
      <ul className={styles.FeaturesList}>
        <li className={styles.FeaturesListItems}>
          <Image src={icon1} alt="Features icon" width={60} height={60} />
          <div>
            <h2>Wide Selection of Genres</h2>
            <p>From romance to non-fiction, we have it all.</p>
          </div>
        </li>
        <li className={styles.FeaturesListItems}>
          <Image src={icon3} alt="Features icon" width={60} height={60} />
          <div>
            <h2>Exclusive Deals and Offers</h2>
            <p>Get discounts on your purchases.</p>
          </div>
        </li>
        <li className={styles.FeaturesListItems}>
          <Image src={icon2} alt="Features icon" width={60} height={60} />
          <div>
            <h2>Instant access</h2>
            <p>Read the purchased book on any device.</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
