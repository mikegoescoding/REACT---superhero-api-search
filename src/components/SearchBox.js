import React from 'react';
import '../App.css'

const SearchBox = ({ searchChange }) => {
  return (
    <div className="search">
      <input
        className="search-container"
        type="search"
        placeholder="Search..."
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
