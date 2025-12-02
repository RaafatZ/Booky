"use client";

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

      <div className={styles.booksWrapper}>
        <form onSubmit={handleSearch} className={styles.searchBox}>
          <h1>Search</h1>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search books..."
          />
          <button type="submit">Search</button>
        </form>

        <div className={styles.gridBooks}>
          {books.map((book) => (
            <div key={book.id} className={styles.card}>
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
            </div>
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
