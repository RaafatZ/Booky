"use client";

import { useState, useEffect } from "react";
import styles from "./Books.module.scss";

export default function BooksPage({ apiUrl = "https://gutendex.com/books" }) {
  const [books, setBooks] = useState([]);
  const [nextPage, setNextPage] = useState(apiUrl);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const [categories, setCategories] = useState([]); // extracted categories
  const [selectedCategory, setSelectedCategory] = useState("");

  // Fetch books
  const loadBooks = async (reset = false) => {
    if (!nextPage && !reset) return;

    setLoading(true);

    try {
      const url = reset ? `${apiUrl}?search=${search}` : nextPage;

      const res = await fetch(url);
      const data = await res.json();

      // Update books
      const newBooks = reset ? data.results : [...books, ...data.results];
      setBooks(newBooks);

      // Save next page
      setNextPage(data.next);

      // Extract categories only once
      if (reset) extractCategories(newBooks);
    } catch (err) {
      console.error("Failed:", err);
    }

    setLoading(false);
  };

  // Extract all available subjects from loaded books
  const extractCategories = (bookList) => {
    const setCat = new Set();

    bookList.forEach((book) => {
      book.subjects?.forEach((sub) => setCat.add(sub));
    });

    setCategories([...setCat]);
  };

  useEffect(() => {
    loadBooks(true);
  }, []);

  // Search handler
  const handleSearch = (e) => {
    e.preventDefault();
    setNextPage(null);
    loadBooks(true);
  };

  // Filtered Books
  const filteredBooks = selectedCategory
    ? books.filter((b) => b.subjects?.includes(selectedCategory))
    : books;

  return (
    <div className={styles.container}>
      <h2>Books Library</h2>

      <div className={styles.filters}>
        {/* Search */}
        <form onSubmit={handleSearch} className={styles.searchBox}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search books..."
          />
          <button type="submit">Search</button>
        </form>

        {/* Category Filter */}
        <select
          className={styles.select}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Books Grid */}
      <div className={styles.grid}>
        {filteredBooks.map((book) => (
          <div key={book.id} className={styles.card}>
            <img
              src={book.formats["image/jpeg"] || "/placeholder.png"}
              alt={book.title}
            />
            <h4>{book.title}</h4>
            <p>{book.authors?.[0]?.name || "Unknown Author"}</p>
          </div>
        ))}
      </div>

      {/* Load More */}
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
