"use client";
import styles from "./LastNews.module.scss";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import news1 from "@/../../public/Image/news1.webp";
import news2 from "@/../../public/Image/news2.jpg";
import news3 from "@/../../public/Image/news3.jpg";
import news4 from "@/../../public/Image/news4.jpg";
import news5 from "@/../../public/Image/news5.jpg";
import ButtonAtom from "../../atoms/ButtonAtom/ButtonAtom";
export default function LatestNews() {
  return (
    <section className={styles.container}>
      <div className={styles.Titles}>
        <h1>
          <span>Last</span> News
        </h1>
        <ButtonAtom>
          <a href="/Books">View All</a>
        </ButtonAtom>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.leftCard}>
          <Image
            src={news1}
            width={600}
            height={550}
            alt="Main Book"
            className={styles.mainImg}
          />
          <div className={styles.itemBox}>
            <Image
              src={news2}
              width={350}
              height={200}
              alt="Kindle"
              className={styles.sacImg}
            />
            <div className={styles.content}>
              <h3>Top 5 Romance Authors You Need to Read</h3>
              <p>
                Discover the most captivating romance authors of the year. From
                heartwarming tales to steamy plots, these writers know how to
                keep you hooked.
              </p>
              <button className={styles.learnMore}>Learn More</button>
            </div>
          </div>
        </div>

        <div className={styles.rightContent}>
          <div className={styles.smallItem}>
            <div className={styles.iconCircle}>
              <Image src={news3} width={160} height={160} alt="Read" />
            </div>
            <div>
              <h4>
                Choose Your Next Read <MoveRight color="#f45350" />
              </h4>
              <p>
                Struggling to choose your next read? These tips help you pick a
                book that fits your mood and taste.
              </p>
            </div>
          </div>
          <div className={styles.smallItem}>
            <div className={styles.iconCirclePink}>
              <Image src={news4} width={160} height={160} alt="Cover" />
            </div>
            <div>
              <h4>
                The Art of a Book Cover <MoveRight color="#f45350" />
              </h4>
              <p>
                Here’s how cover design impacts your book choices more than you
                think.
              </p>
            </div>
          </div>

          <div className={styles.smallItem}>
            <div className={styles.iconCircleBlue}>
              <Image src={news5} width={160} height={160} alt="Ebooks" />
            </div>
            <div>
              <h4>
                Why We Love eBooks <MoveRight color="#f45350" />
              </h4>
              <p>
                With convenience and variety, digital bookstores are changing
                how we read.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
