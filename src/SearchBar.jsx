import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search1">
      <div className="search-bar">
        <input type="text" placeholder="search..." className="search-input" />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
    </div>
  );
};

export default SearchBar;
