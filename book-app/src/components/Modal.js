import React, { useRef, useEffect } from 'react';

function Modal({ book, onClose }) {
    const modalRef = useRef(null);

    useEffect(() => {
        if (modalRef.current) {
            const { offsetWidth, offsetHeight, offsetTop, offsetLeft } = modalRef.current;
            console.log('Modal Width:', offsetWidth);
            console.log('Modal Height:', offsetHeight);
            console.log('Modal Position Top:', offsetTop);
            console.log('Modal Position Left:', offsetLeft);
        }
    }, [book]); // Run this effect when the book changes

    if (!book) return null;

    const modalStyle = {
        display: 'block', // This will ensure the modal is visible when the book data is present
    };

    return (
        <div className="modal" style={modalStyle} ref={modalRef}>
            <div className="modal-content">
                <div className="container">
                    <span className="close" onClick={onClose}>&times;</span>

                    <div className="centered-content">
                        <img src={book.image_url} alt={`Cover of ${book.title}`} />
                        <h3>{book.title}</h3>
                    </div>

                    <div className="book-details">
                        {/* Other book details (author, rating, etc.) */}
                        <p><b>Author:</b> {book.author}</p>
                        <p><b>Rating:</b> {book.average_rating}</p>
                        <p><b>Length:</b> {book.num_pages} pages</p>
                        <p><b>Description:</b> {book.description}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Modal;
