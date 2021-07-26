import React from 'react';

import './search-panel.css'
// creating component
const SearchPanel = () => {
    return (
        <input
            className="form-control search-input"
            type="text"
            placeholder="Search from posts"
        />
    )
}

export default SearchPanel;