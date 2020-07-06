import React, { Component } from "react";
import "../styles/DataArea.css";
import API from "../utils/API";
import Nav from "./Nav";
import DataTable from "./DataTable";

// Only component using state. Makes use of DataBody, DataTable, Nav, and SearchBox.


// users and filtered users are empty until component did mount completes the API call
// after that they are filled with data from results
export default class DataArea extends Component {
  state = {
    users: [{}],
    order: "descend",
    filteredUsers: [{}]
  }

  // headings is passed to DataTable as props to make rows
  headings = [
    { name: "Image", width: "10%" },
    { name: "Name", width: "10%" },
    { name: "Phone", width: "20%" },
    { name: "Email", width: "20%" },
    { name: "DOB", width: "10%" }
  ]

  // In DataTable when the heading is clicked the value is assigned here.
  // state starts it descending. set up to reverse order on every click
  handleSort = heading => {
    if (this.state.order === "descend") {
      this.setState({
        order: "ascend"
      })
    } else {
      this.setState({
        order: "descend"
      })
    }

// compareFnc returns a-b or b-a to sort
// sort uses that to determine if the filteredUsers array is a-b ascending or b-a descending and sets that to sortedUsers
// then the state of filteredUsers's state is set to sortedUsers
    const compareFnc = (a, b) => {
      if (this.state.order === "ascend") {
        // account for missing values
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        // numerically
        else if (heading === "name") {
          return a[heading].first.localeCompare(b[heading].first);
        } else {
          return a[heading] - b[heading];
        }
      } else {
        // order only has 2 states so the else statement checks if (this.state.order === "descend") 
        // account for missing values
        if (b[heading] === undefined) {
          return 1;
        } else if (a[heading] === undefined) {
          return -1;
        }
        // numerically
        else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        } else {
          return b[heading] - a[heading];
        }
      }

    }
    const sortedUsers = this.state.filteredUsers.sort(compareFnc);
    this.setState({ filteredUsers: sortedUsers });
  }

// this is passed to SearchBox as a prop and set to it as onChange
// everytime the input changes it is called
// users are filtered using the value of the SearBox input
// indexOf only returns values found because of !== -1 
  handleSearchChange = event => {
    console.log(event.target.value);
    const filter = event.target.value;
    const filteredList = this.state.users.filter(item => {
      // merge data together, then see if user input is anywhere inside
      let values = Object.values(item).join("").toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ filteredUsers: filteredList });
  }


  // sets the state of users and filteredUsers to results upon success of API get call
  componentDidMount() {
    API.getUsers().then(results => {
      // console.log(results);
      this.setState({users: results.data.results, filteredUsers: results.data.results})
    });
  }

  // renders the DataArea for Main to use
  // passes handleSearch to Nav as props. passes headings, users,  and handleSort to DataTable as props
  render() {
    return (
      <>
        <Nav handleSearchChange={this.handleSearchChange} />
        <div className="data-area">
          <DataTable headings={this.headings} users={this.state.filteredUsers} handleSort={this.handleSort} />
        </div>
      </>
    );
  }
}