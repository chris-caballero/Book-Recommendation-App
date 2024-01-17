import React from 'react';

function BookCard({ book, onShowBookDetails }) {
    return (
        <div className="book-card" onClick={() => onShowBookDetails(book)}>
            <div className="book-info">
            </div>
            <div className="book-title">
                <h2>{book.title}</h2>
            </div>
        </div>
    );
}

export default BookCard;
