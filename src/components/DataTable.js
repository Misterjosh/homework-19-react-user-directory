import React from "react";
import DataBody from "./DataBody";
import "../styles/DataTable.css";

function DataTable({ headings, users, handleSort }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
      </table>
    </div>
  )
}
  // Hint: headings.map
  export default DataTable;

  // Here we will create the header row for the table 
  // using the values from headings.