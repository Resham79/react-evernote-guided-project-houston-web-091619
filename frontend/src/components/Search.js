import React from 'react';

const Search = (props) => {
  return (
    <div className="filter">
      <input
        onChange = { (e) => props.onSearchChange(e.target.value)}
        id="search-bar"
        type="text"
        placeholder="Search Notes"
      />
    </div>
  );
}

export default Search;
