import styles from "./News.module.scss";
import cover from "../../../../../public/Image/6762b682b45fbc15eefe919c_optimized_1944.webp";
import bg1 from "../../../../../public/Image/67459e46a84e2665a3f7a204_optimized_1402.webp";
import bg2 from "../../../../../public/Image/67.webp";
export default function News() {
  return (
    <div className={styles.container} id="NewsSection">
      <div className={styles.boxsWrapper}>
        <div
          className={styles.firstBox}
          style={{ backgroundImage: `url(${bg1.src})` }}
        >
          <h1>Whats new?</h1>
          <p>Upcoming Book-to-Movie Adaptations You Can’t Miss</p>
          <img src={cover.src} alt="bg" />
        </div>
        <div
          className={styles.secondBox}
          style={{ backgroundImage: `url(${bg2.src})` }}
        >
          <h1>Read With Us</h1>
          <p>We have everything you're looking for</p>
          <ul>
            <li>Instant downloads</li>
            <li>Up to 100,000+ eBooks </li>
            <li>Limited edition covers available </li>
          </ul>
          <a href="Books">Discover Now</a>
        </div>
      </div>
    </div>
  );
}
