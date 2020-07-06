import React from "react";
import "../styles/SearchBox.css";

// handleSearhChange comes from DataArea.js through Nav.js as a prop
// onChange looks for an event, calls it, and passes the event into it

function SearchBox({ handleSearchChange }) {
    return (
      <div className="searchbox">
        <form className="form-inline">
          <input
          className="form-inline"
          type="search"
          placeholder="Search"
          onChange={(e) => handleSearchChange(e) } />
        </form>
      </div>
    );
  }
  export default SearchBox;
  