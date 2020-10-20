import React, { Component } from "react";
// named import {} & the default import
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
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      booklisting: [],
      totalBooks: 0,
      booksPerPage: 0,
      notification: 0,
      footer: 0,
    };
  }

  componentDidMount() {
    console.log("[BookTable][componentDidMount] fetching data from server");
    const bookFetchUrl = process.env.REACT_APP_SERVER_URL+"/books";
    fetch(bookFetchUrl)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            booklisting: result.books,
            totalBooks: result.total_books,
            booksPerPage: result.entries_per_page,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(
            "[BookTable][componentDidMount] Could not fetch the data from the server",
            error
          );
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );

    //this.state = { booklisting: bookListing }
  }

  prepareTable() {
    const tableStyle = { border: "1px solid black", padding: "10px" };
    const colNames = [
      "Book Title",
      "Author",
      "Book Type",
      "Year",
      "Series",
      "Rating",
    ];
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
