import React, { Component } from 'react';
// named import {} & the default import 
import { bookListing } from '../services/books_listing'

//import Navbar from 'react-bootstrap/Navbar';
import {Navbar, Nav, NavDropdown,FormControl,Form,Table, Button} from 'react-bootstrap';
 
class BookTable extends Component {
    state = { booklisting: [], notification: 0, footer:0 }
 
    componentDidMount(){
        console.log("Component did mount")
        this.setState( { booklisting: bookListing } )
        //this.state = { booklisting: bookListing }
    }
    
    render() {
        const tableStyle = { "border": "1px solid black" ,"padding": "10px"}
        const colNames = ["Book Title", "Author", "Year", "Series", "Rating"];
        const tableHeader = <tr style={tableStyle}>{colNames.map((col) => <th>{col}</th>)} </tr>;
        const bootstrapTableHeader = <thead> <tr>{colNames.map((col) => <th>{col}</th>)} </tr> </thead>;
        const bootstrapTableBody = <tbody> {this.state.booklisting.map((book) => <tr key={book.id} style={tableStyle}>
                         <td style={tableStyle}>{book.title}</td>
                         <td style={tableStyle}>{book.author}</td> 
                         <td style={tableStyle}>{book.year}</td> 
                         <td style={tableStyle}>{book.series}</td>
                         <td style={tableStyle}>{book.rating}</td>
                          </tr>)} </tbody>;
        const bootstrapTable  = <Table striped bordered hover size="sm"> {bootstrapTableHeader} {bootstrapTableBody}</Table>
    
        const tableBody = this.state.booklisting.map((book) => <tr key={book.id} style={tableStyle}>
                         <td style={tableStyle}>{book.title}</td>
                         <td style={tableStyle}>{book.author}</td> 
                         <td style={tableStyle}>{book.year}</td> 
                         <td style={tableStyle}>{book.series}</td>
                         <td style={tableStyle}>{book.rating}</td>
                          </tr>);
       
        // const bookTable = <table className="bookTable" style={tableStyle}>  {tableHeader} {tableBody} </table>;
    return ( <div> {bootstrapTable}</div>);
    }
}
 
export default BookTable;