import React from "react";
import DataBody from "./DataBody";
import "../styles/DataTable.css";

// headings, users, and handleSort are props from DataArea.js
// users is passed to DataBody as a prop
// headings.map takes name and width from every object in the headings array and creates a header cell from each set
// handeSort gets the clicked name, makes it lower case, and then sets the value to be used in DataArea as heading

function DataTable({ headings, users, handleSort }) {
  return (
    <div className="datatable mt-5">
      <table id="table" className="table table-striped table-hover table-condensed" >
        <thead>
          <tr>
            {headings.map(({ name, width }) => {
              return (
                <th className="col" key={name} style={{ width }} onClick={() => { handleSort(name.toLowerCase()); }}>
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>
          <DataBody users={users} />
      </table>
    </div>
  );
}

export default DataTable;
