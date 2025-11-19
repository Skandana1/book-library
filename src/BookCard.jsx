import React from "react";
import "./BookCard.css"; // optional, if using CSS

const BookCard = ({ title, author, genre, year, description }) => {
  return (
    <div className="book-card">
      <h2>{title}</h2>
      <h3>by {author}</h3>
      <p><strong>Genre:</strong> {genre}</p>
      <p><strong>Published:</strong> {year}</p>
      <p>{description}</p>
    </div>
  );
};

export default BookCard;
