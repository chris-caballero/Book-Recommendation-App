import React, { useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import BookCard from './components/BookCard';
import Header from './components/Header';
import useBooks from './hooks/useBooks'; // assuming this is in a hooks folder

function App() {
    const books = useBooks();
    const [modalBook, setModalBook] = useState(null);

    const showBookDetails = (book) => {
        setModalBook(book);
    };
  
    const closeBookDetails = () => {
        setModalBook(null);
    };

    const handleSearch = () => {
        // Implement search functionality
    };

    return (
        <div className="App">
            <Header onSearch={handleSearch} />
            <main>
                <div className="container">
                    <section className="book-grid">
                        {books.map((book, index) => (
                            <BookCard key={index} book={book} onShowBookDetails={showBookDetails} />
                        ))}
                    </section>
                </div>        
            </main>
            <Modal book={modalBook} onClose={closeBookDetails} />
        </div>
    );
}

export default App;
