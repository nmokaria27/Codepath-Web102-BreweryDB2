// src/components/SearchBar.jsx
import React from 'react';

function SearchBar({ setSearchQuery }) {
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search breweries..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
