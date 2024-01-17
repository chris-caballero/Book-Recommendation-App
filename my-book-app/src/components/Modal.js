import React, { useRef, useEffect } from 'react';

function Modal({ book, onClose }) {
    const modalRef = useRef(null); // Create a ref

    useEffect(() => {
        if (modalRef.current) {
            const { offsetWidth, offsetHeight, offsetTop, offsetLeft } = modalRef.current;
            console.log('Modal Width:', offsetWidth);
            console.log('Modal Height:', offsetHeight);
            console.log('Modal Position Top:', offsetTop);
            console.log('Modal Position Left:', offsetLeft);
        }
    }, [book]); // Run this effect when the book changes
  
    if (!book) return null; // Don't render the modal if no book is provided

    const modalStyle = {
        display: 'block', // This will ensure the modal is visible when the book data is present
    };

    return (
        <div className="modal" style={modalStyle} ref={modalRef}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <div className="book-details">
                <h2>{book.title}</h2>
                <p>{book.author}</p>
                <p>{book.description}</p>
                </div>
            </div>
        </div>
  );
}

export default Modal;
