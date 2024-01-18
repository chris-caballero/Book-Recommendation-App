import React from 'react';

function BookCard({ book, onShowBookDetails }) {
    const cardStyle = {
        backgroundImage: `url(${book.image_url})`,
        backgroundSize: 'cover',   // Ensures the image covers the whole card
        backgroundPosition: 'center', // Centers the background image
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
        height: '296px', // Example fixed height, adjust as needed
        width: '196px', // Example fixed width, adjust as needed
        // Other styling as needed
    };

    return (
        <div className="book-card" style={cardStyle} onClick={() => onShowBookDetails(book)}>
            <div className="book-info">
            </div>
            <div className="book-title">{book.title}</div>
        </div>
    );
}

export default BookCard;
