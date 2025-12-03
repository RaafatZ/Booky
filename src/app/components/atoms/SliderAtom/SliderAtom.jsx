"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Carousel } from "antd";
import { ChevronLeft, ChevronRight } from "lucide-react";

import styles from "./SliderAtom.module.scss";
import Loading from "./../LoadingAtom/Loading";

export default function SliderAtom({ apiUrl }) {
  const sliderRef = useRef(null);
  const [books, setBooks] = useState([]);
  const [centerdMode, setCenterdMode] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setSlidesToShow(1);
        setCenterdMode(false);
      } else if (window.innerWidth < 900) {
        setSlidesToShow(2);
        setCenterdMode(true);
      } else {
        setSlidesToShow(4);
        setCenterdMode(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();

        if (data.results) setBooks(data.results);
        else if (Array.isArray(data)) setBooks(data);
      } catch (err) {
        console.error(" Failed to fetch books:", err);
      }
    };

    fetchBooks();
  }, [apiUrl]);

  return (
    <motion.div
      className={styles.carouselWrapper}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <button
        className={styles.arrowLeft}
        onClick={() => sliderRef.current?.prev()}
      >
        <ChevronLeft size={30} />
      </button>

      <div className={styles.carouselContainer}>
        <Carousel
          ref={sliderRef}
          centerMode={centerdMode}
          slidesToShow={slidesToShow}
          slidesToScroll={1}
          dots={false}
          infinite
          className={styles.carousel}
        >
          {books.length > 0 ? (
            books.map((book, i) => (
              <motion.div
                key={i}
                className={styles.slide}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
              >
                <img
                  src={book.formats?.["image/jpeg"] || "/Image/224.png"}
                  alt={book.title}
                  width={250}
                  height={300}
                />
                <h2>{book.title}</h2>

                <a
                  href={
                    book.formats["text/plain; charset=utf-8"] ||
                    book.formats["text/plain"] ||
                    book.formats["application/epub+zip"] ||
                    book.formats["application/pdf"] ||
                    "#"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  Download
                </a>
              </motion.div>
            ))
          ) : (
            <Loading />
          )}
        </Carousel>
      </div>

      <button
        className={styles.arrowRight}
        onClick={() => sliderRef.current?.next()}
      >
        <ChevronRight size={40} />
      </button>
    </motion.div>
  );
}
