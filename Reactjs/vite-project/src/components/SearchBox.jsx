import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className="searchbox-wrap">
      <input
        className="searchbox-input"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
