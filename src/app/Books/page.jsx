"use client";

import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "./Books.module.scss";
import { Popover } from "antd";

export default function BooksPage({ apiUrl = "https://gutendex.com/books" }) {
  const [books, setBooks] = useState([]);
  const [nextPage, setNextPage] = useState(apiUrl);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const loadBooks = async (reset = false) => {
    if (!nextPage && !reset) return;

    setLoading(true);

    try {
      const url = reset ? `${apiUrl}?search=${search}` : nextPage;

      const res = await fetch(url);
      const data = await res.json();

      const newBooks = reset ? data.results : [...books, ...data.results];
      setBooks(newBooks);
      setNextPage(data.next);
    } catch (err) {
      console.error("Failed:", err);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadBooks(true);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setNextPage(null);
    loadBooks(true);
  };

  return (
    <div className={styles.container}>
      <h2>Books Library</h2>
      <motion.form
        onSubmit={handleSearch}
        className={styles.searchBox}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h1>Search</h1>
        <div>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search books..."
          />
          <button type="submit">
            <Search />
          </button>
        </div>
      </motion.form>
      <div className={styles.booksWrapper}>
        <div className={styles.gridBooks}>
          {books.map((book) => (
            <motion.div
              key={book.id}
              className={styles.card}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
              <Popover
                title={book.title}
                trigger="click"
                content={
                  <div style={{ maxWidth: "550px" }}>
                    <p>
                      <strong>Author:</strong>{" "}
                      {book.authors?.[0]?.name || "Unknown"}
                    </p>
                    <h2>Download:</h2>
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
                  </div>
                }
              >
                <img
                  src={book.formats["image/jpeg"] || "/placeholder.png"}
                  alt={book.title}
                  className={styles.bookImage}
                />
              </Popover>
            </motion.div>
          ))}
        </div>
      </div>

      {nextPage && (
        <button
          className={styles.loadMore}
          onClick={() => loadBooks()}
          disabled={loading}
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
}
