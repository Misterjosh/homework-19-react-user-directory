import React from "react";
import SearchBox from "./SearchBox.js";
import "../styles/Nav.css";

function Nav({ handleSearchChange }) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="navbar-collapse">
        <SearchBox handleSearchChange={handleSearchChange} />
      </div>
     {/* We render the SearchBox here and pass in necessary props */}
    </nav>
  );
}
export default Nav;
