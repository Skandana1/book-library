import React from "react";
import BookCard from "./components/BookCard";

const books = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    year: 1988,
    description: "A journey of self-discovery about following your dreams."
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    year: 1949,
    description: "A chilling depiction of a totalitarian regime."
  },
  {
    title: "The Power of Habit",
    author: "Charles Duhigg",
    genre: "Non-Fiction",
    year: 2012,
    description: "Explores how habits shape our lives and how to change them."
  },
  {
    title: "Sherlock Holmes",
    author: "Arthur Conan Doyle",
    genre: "Mystery",
    year: 1892,
    description: "Classic detective stories filled with suspense and intrigue."
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    year: 1960,
    description: "A novel about racial injustice and moral growth."
  }
];

const App = () => {
  // Calculate most common genre
  const genreCount = {};
  books.forEach(
    (book) => (genreCount[book.genre] = (genreCount[book.genre] || 0) + 1)
  );
  const mostCommonGenre = Object.keys(genreCount).reduce((a, b) =>
    genreCount[a] > genreCount[b] ? a : b
  );

  return (
    <div className="app-container">
      <header>
        <h1>My Book Collection</h1>
        <p>Books That Changed My Perspective</p>
      </header>

      <main className="book-list">
        {books.map((book, index) => (
          <BookCard key={index} {...book} />
        ))}
      </main>

      <section className="summary">
        <p>Total Books: {books.length}</p>
        <p>Most Common Genre: {mostCommonGenre}</p>
      </section>

      <footer>
        <p>
          © {new Date().getFullYear()} Sangita | Email: your-email@example.com
        </p>
      </footer>
    </div>
  );
};

export default App;
