import ButtonAtom from "../../atoms/ButtonAtom/ButtonAtom";
import styles from "./BookSlider.module.scss";
import SliderAtom from "./../../atoms/SliderAtom/SliderAtom";
export default function BookSlider() {
  return (
    <div className={styles.container} id="SliderSection">
      <div className={styles.Titles}>
        <h1>
          <span> Discover Our</span> Book Collection
        </h1>
        <ButtonAtom>
          <a href="/Books">View All</a>
        </ButtonAtom>
      </div>
      <div className={styles.sliderContainer}>
        <SliderAtom apiUrl="https://gutendex.com/books" />
      </div>
    </div>
  );
}
