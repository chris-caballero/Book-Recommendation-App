import React from 'react';
import { FaSearch } from 'react-icons/fa';

function Header({ onSearch }) {
    return (
        <header className="navbar">
            <h1 className="navbar-brand">My Bookshelf Spot</h1>
            <div className="search-bar">
                <input type="text" placeholder="Search by title, genre, or description" className="search-input" />
                <FaSearch className="search-button" onClick={onSearch} />
            </div>
        </header>
    );
}

export default Header;
