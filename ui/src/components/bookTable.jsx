import React, { Component } from "react";
// named import {} & the default import
import { booksList } from "../services/booksList";
import BookListing from "./bookListing";

//import Navbar from 'react-bootstrap/Navbar';
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Form,
  Table,
  Button,
} from "react-bootstrap";

class BookTable extends Component {
  state = { booklisting: [], notification: 0, footer: 0 };

  componentDidMount() {
    console.log("Component did mount");
    this.setState({ booklisting: booksList });
    //this.state = { booklisting: bookListing }
  }

  prepareTable() {
    const tableStyle = { border: "1px solid black", padding: "10px" };
    const colNames = ["Book Title", "Author", "Year", "Series", "Rating"];
    const tableHeader = (
      <tr style={tableStyle}>
        {colNames.map((col) => (
          <th>{col}</th>
        ))}{" "}
      </tr>
    );
    const bootstrapTableHeader = (
      <thead>
        {" "}
        <tr>
          {colNames.map((col) => (
            <th>{col}</th>
          ))}{" "}
        </tr>{" "}
      </thead>
    );
    const bootstrapTableBody = (
      <tbody>
        {" "}
        {this.state.booklisting.map((book) => (
          <BookListing book={book} tableStyle={tableStyle} />
        ))}
      </tbody>
    );
    const bootstrapTable = (
      <Table striped bordered hover size="lg">
        {" "}
        {bootstrapTableHeader} {bootstrapTableBody}
      </Table>
    );
    return bootstrapTable;
  }

  render() {
    const bootstrapTable = this.prepareTable();
    return <React.Fragment>{bootstrapTable}</React.Fragment>;
  }
}

export default BookTable;
