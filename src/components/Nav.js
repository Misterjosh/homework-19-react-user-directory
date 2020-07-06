import React from "react";
import SearchBox from "./SearchBox.js";
import "../styles/Nav.css";

// Nav.js imports and uses SearchBox.js
// handleSearchChange comes from DataArea.js as a prop
// It is passed to SearchBox as a prop

function Nav({ handleSearchChange }) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="navbar-collapse">
        <SearchBox handleSearchChange={handleSearchChange} />
      </div>
    </nav>
  );
}
export default Nav;
