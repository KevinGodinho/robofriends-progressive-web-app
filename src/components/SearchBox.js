import React from "react";

const SearchBox = ({ onSearch }) => {
  return (
    <div className="pa2">
      <input
        aria-label="Search Robots"
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search..."
        onChange={onSearch}
      />
    </div>
  );
};

export default SearchBox;
