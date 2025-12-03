"use client";
import { motion } from "framer-motion";
import styles from "./About.module.scss";
import ButtonAtom from "../../atoms/ButtonAtom/ButtonAtom";
import bg from "../../../../../public/Image/cover-bg.png";

export default function About() {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <motion.div
        className={styles.AboutInfo}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className={styles.Titles}>
          <h2>Booky</h2>
          <h1>About Our Team :</h1>
        </div>
        <div className={styles.paragraphs}>
          <p>
            We are a dedicated team of ten students from the College of Al-Riada
            University – Software Engineering Department, working together on a
            semester-long software development project. Our mission is to design
            and develop an innovative online book library website that makes
            reading easier, faster, and more accessible for everyone. Throughout
            this project, we combined our skills in design, programming,
            research, and problem-solving to build a platform that offers a
            smooth browsing experience, rich book collections, and user-friendly
            features.
          </p>
          <div className={styles.members}>
            <h2>Our Team Members:</h2>
            <div className={styles.membersLists}>
              <ul>
                <li>1-Ahmed Soliman Mousa — ID: 2401050</li>
                <li>2-MohyEldin Yasser MohyEldin — ID: 2401193</li>
                <li>3-Afnan GamalAldeen Abdelwahab — ID: 2401195</li>
                <li>4-Ahmed Mahmoud Khirallah — ID: 2401190</li>
                <li>5-Abdalrhman Raafat Abdrbbo — ID: 2401219</li>
              </ul>
              <ul>
                <li>6-Mohammed Mansor Ahmed — ID: 2401455</li>
                <li>7-Ammar Ashraf Faisal Akrab — ID: 2401576</li>
                <li>8-Ali Essam Saeed Dargham — ID: 2401581</li>
                <li>9-Mohamed Mohamed Fathy — ID: 2401594</li>
                <li>10-Mariam Reda Abd Elhamid — ID: 2401595</li>
              </ul>
            </div>
          </div>
        </div>
        <ButtonAtom>
          <a href="/">Go Back</a>
        </ButtonAtom>
      </motion.div>
    </div>
  );
}
