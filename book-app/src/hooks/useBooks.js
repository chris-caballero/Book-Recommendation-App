import { useState, useEffect } from 'react';

function useBooks(initialPage = 1, perPage = 30) {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(initialPage);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true); // Indicates whether there are more books to load

  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await fetch(`http://localhost:5000/api/books?page=${page}&per_page=${perPage}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        // If there are no more books to load, stop fetching
        if (data.length === 0) {
          setHasMore(false);
          return;
        }

        // Append the newly fetched books to the existing books
        setBooks((prevBooks) => [...prevBooks, ...data]);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    if (hasMore) {
      fetchBooks();
    }
  }, [page, perPage, hasMore]);

  return { books, loading, error, loadMore: () => setPage((prevPage) => prevPage + 1) };
}

export default useBooks;







// import { useState, useEffect } from 'react';

// function useBooks() {
//     const [books, setBooks] = useState([]);

//     useEffect(() => {
//         fetch("http://localhost:5000/api/books")
//             .then(response => response.json())
//             .then((data) => {
//                 setBooks(data)
//             })
//             .catch(error => console.error("Error fetching data:", error));
//     }, []);

//     return books;
// }

// export default useBooks;
