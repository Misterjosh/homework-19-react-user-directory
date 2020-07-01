import React, { Component } from "react";
import "../styles/DataArea.css";
import API from "../utils/API";
import Nav from "./Nav";
import DataTable from "./DataTable";


export default class DataArea extends Component {
  state = {
    users: [{}],
    order: "descend",
    filteredUsers: [{}]
  }

  headings = [
    { name: "Image", width: "10%" },
    { name: "Name", width: "10%" },
    { name: "Phone", width: "20%" },
    { name: "Email", width: "20%" },
    { name: "DOB", width: "10%" }
  ]

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
        // else statement to handle if this.state.order === descend
      } // 60 48-58 is else statement for descend

    }
    const sortedUsers = this.state.filteredUsers.sort(compareFnc);
    this.setState({ filteredUsers: sortedUsers });
  }

  handleSearchChange = event => {
    console.log(event.target.value);
    const filter = event.target.value;
    const filteredList = this.state.users.filter(item => {
      // merge data together, then see if user input is anywhere inside

    });
    this.setState({ filteredUsers: filteredList });
  }

  componentDidMount() {
    API.getUsers().then(results => {

    });
  }

  render() {
    return (
      <>
        <Nav handleSearchChange={this.handleSearchChange} />
        <div className="data-area">
          <DataTable
           // we will need to pass in props for headings, users, and handlesort here to DataTable
          />
        </div>
      </>
    );
  }
}