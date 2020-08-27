import React, { Component } from 'react';
// named import {} & the default import 
import { bookListing } from '../services/books_listing'


class BookTable extends Component {
    state = {  }
    
    render() {
        console.log(bookListing);
        const localbookListing = bookListing;

        const colNames = ["Book Title", "Author", "Year", "Series", "Rating"];
        const tableHeader = <tr>{colNames.map((col) => <th>{col}</th>)} </tr>;
        const tableBody = localbookListing.map((book) => <tr>
                         <td>{book.title}</td>
                         <td>{book.author}</td> 
                         <td>{book.year}</td> 
                         <td>{book.series}</td> </tr>);
        const bookTable = <table className="bookTable">  {tableHeader} {tableBody} </table>;
    return ( <div>{bookTable}</div>);
    }
}
 
export default BookTable;