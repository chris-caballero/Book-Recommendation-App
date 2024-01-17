import React, { useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import BookCard from './components/BookCard';
import './new.js'

function App() {
    const numberOfBooks = 96;
    const books = Array.from({ length: numberOfBooks }, (_, i) => ({
        title: `Book Title ${i + 1}`,
        author: `Author ${i + 1}`,
        description: `Description for Book ${i + 1}`,
        cover: `path-to-cover${i + 1}.jpg`,
    }));

    const [modalBook, setModalBook] = useState(null);

    const showBookDetails = (book) => {
      setModalBook(book);
    };
  
    const closeBookDetails = () => {
      setModalBook(null);
    };

    return (
        <div className="App">
            <header>
                <h1>My Bookshelf</h1>
                <div className="search-bar">
                    <input type="text" placeholder="Search by title, genre, or description" />
                    <button>Search</button>
                </div>
                <div className="recommendation-switch"> 
                    <label>
                        <input type="checkbox" id="rec-toggle" />
                        <span>Toggle Content</span>
                    </label>
                </div>
            </header>
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
