import React from 'react';

function Header({ onSearch }) {
    return (
        <header>
            <h1>My Bookshelf</h1>
            <div className="search-bar">
                <input type="text" placeholder="Search by title, genre, or description" />
                <button onClick={onSearch}>Search</button>
            </div>
            <div className="recommendation-switch"> 
                <label>
                    <input type="checkbox" id="rec-toggle" />
                    <span>Toggle Content</span>
                </label>
            </div>
        </header>
    );
}

export default Header;
