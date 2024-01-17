import React from 'react';

function BookCard({ book, onShowBookDetails }) {
    return (
      <div className="book-card" onClick={() => onShowBookDetails(book)}>
        <div className="book-info">
          <h2>{book.title}</h2>
          <p>{book.author}</p>
        </div>
      </div>
    );
  }

export default BookCard;