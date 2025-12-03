"use client";
import { motion } from "framer-motion";
import ButtonAtom from "../../atoms/ButtonAtom/ButtonAtom";
import styles from "./BookSlider.module.scss";
import SliderAtom from "./../../atoms/SliderAtom/SliderAtom";
export default function BookSlider() {
  return (
    <div className={styles.container} id="SliderSection">
      <motion.div
        className={styles.Titles}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1>
          <span> Discover Our</span> Book Collection
        </h1>
        <ButtonAtom>
          <a href="/Books">View All</a>
        </ButtonAtom>
      </motion.div>
      <div className={styles.sliderContainer}>
        <SliderAtom apiUrl="https://gutendex.com/books" />
      </div>
    </div>
  );
}
