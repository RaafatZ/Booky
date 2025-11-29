import styles from "./About.module.scss";
import bg from "../../../../../public/Image/cover-bg.png";
import { url } from "inspector";
export default function About() {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className={styles.AboutInfo}>
        <h1>About Us</h1>
        <p>
          We are a passionate team of 10 driven creators, developers, and
          problem-solvers working together to build digital experiences that
          make a difference. Each member of our team brings unique skills—from
          design and front-end development to back-end engineering, testing,
          content creation, and project management. What unites us is a shared
          vision: to create high-quality, user-focused solutions that are fast,
          modern, and impactful. We collaborate closely, learn from each other,
          and constantly push ourselves to deliver the best possible product.
          Our team values:
        </p>
      </div>
      <div className={styles.AboutList}>
        <div>
          <img src="" alt="" />
          <div>
            <h1></h1>
            <p></p>
          </div>
        </div>
        <div>
          <img src="" alt="" />
          <div>
            <h1></h1>
            <p></p>
          </div>
        </div>
        <div>
          <img src="" alt="" />
          <div>
            <h1></h1>
            <p></p>
          </div>
        </div>
        <div>
          <img src="" alt="" />
          <div>
            <h1></h1>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
