import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
 
function Searchbar() {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
      />
      <button className="search-button">
      <span><FaMagnifyingGlass/></span>
      </button>
    </div>
  );
}

export default Searchbar;
