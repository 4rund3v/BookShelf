import React, { Component } from 'react';
import {bookListing} from '../services/books_listing';

class BookTable extends Component {
    state = {  bookdata: bookListing }
    render() {
        // const tableStyle = {"border": "2px solid black","border-collapse": "collapse", "padding": "15px"}
        const books = this.state.bookdata;
        const tableHeader = <tr><th>Title</th><th>Author</th><th>Publishing Year</th></tr>;
        const tableBody = books.map((book) => <tr><th>{book.title}</th><th>{book.author}</th><th>{book.year}</th></tr> );
        // return ( <table className="bookTable" style={tableStyle}>
        return ( <table className="bookTable">
            {tableHeader}
            {tableBody}
        </table> );
    }
}
 
export default BookTable;