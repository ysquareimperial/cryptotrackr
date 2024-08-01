import React from 'react';

const SearchBar = ({ setSearchQuery }) => {
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <input type="text" placeholder="Search for a coin..." onChange={handleSearch} />
  );
};

export default SearchBar;
