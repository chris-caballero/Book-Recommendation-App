document.addEventListener('DOMContentLoaded', function() {

    // Example book data (this would usually come from your back-end)
    const bookGrid = document.querySelector('.book-grid');
    const numberOfBooks = 96; // Set the number of books you want to display

    for (let i = 1; i <= numberOfBooks; i++) {
        const book = {
            title: 'Book Title ' + i,
            author: 'Author ' + i,
            description: 'Description for Book ' + i,
            cover: 'path-to-cover' + i + '.jpg'
        };

        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
            <div class="book-info">
                <h2>${book.title}</h2>
                <p>${book.author}</p>
            </div>
        `;
        bookCard.onclick = () => showBookDetails(book);
        bookGrid.appendChild(bookCard);
    }

    function showBookDetails(book) {
        // document.getElementById('modal-book-cover').src = book.cover;
        document.getElementById('modal-book-title').textContent = book.title;
        document.getElementById('modal-book-author').textContent = book.author;
        document.getElementById('modal-book-description').textContent = book.description;
        document.getElementById('modal').style.display = 'block';
    }

    // Handling modal close action
    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('modal').style.display = 'none';
    });
});
