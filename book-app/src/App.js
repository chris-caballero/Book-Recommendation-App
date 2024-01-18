import React, { useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import BookCard from './components/BookCard';
import Header from './components/Header';
import useBooks from './hooks/useBooks'; // assuming this is in a hooks folder

function App() {
    const { books, loading, error, loadMore } = useBooks(); // Destructure the returned values from useBooks
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

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

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
                    <button onClick={loadMore} className="load-more">Load More</button> {/* Load more books */}
                </div>        
            </main>
            {modalBook && <Modal book={modalBook} onClose={closeBookDetails} />}
        </div>
    );
}

export default App;
