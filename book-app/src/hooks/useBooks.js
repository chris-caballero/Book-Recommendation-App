import { useState, useEffect } from 'react';

function useBooks() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/books")
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return books;
}

export default useBooks;
