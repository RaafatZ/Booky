"use client";
import { useEffect, useState } from "react";

export default function Test() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch("https://gutendex.com/books");
        const data = await res.json();
        console.log("📚 Full Data:", data);
      } catch (error) {
        console.error("❌ Failed to fetch:", error);
      } finally {
        setLoaded(true);
      }
    };
    fetchBooks();
  }, []);

  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      {loaded ? <h1>✅ Data logged to console</h1> : <p>⏳ Loading...</p>}
    </main>
  );
}
