import React from "react";
import "../styles/DataBody.css";

// users is imported from DataArea.js through DataTable.js as props
// users.map is used to get the values needed to make one row for each user
// login is used to make a unique id for each user and then each value is inserted into its row as table data
// the picture, name, and dob all came back with more than just their base values in the user object. example.this

function DataBody({ users }) {
  function formatDate(date) {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day, year].join("-");
    return formattedDate;
  }

  return (
    <tbody>
      {users[0] !== undefined && users[0].name !== undefined ? (
        users.map(({ login, name, picture, phone, email, dob }) => {
          return (
            <tr key={login.uuid}>
              <td><img src={picture.large} alt={"employee"}/></td>
              <td>{name.first} {name.last}</td>
              <td>{phone}</td>
              <td>{email}</td>
              <td>{formatDate(dob.date)}</td>
            </tr>
          );
        })
      ) : (
        <></>
      )}
    </tbody>
  );
}

export default DataBody;