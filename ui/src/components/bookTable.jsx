import React, { Component } from 'react';
// named import {} & the default import 
import { bookListing } from '../services/books_listing'

//import Navbar from 'react-bootstrap/Navbar';
import {Navbar, Nav, NavDropdown,FormControl,Form,Table, Button} from 'react-bootstrap';
 
class BookTable extends Component {
    state = { booklisting: [], notification: 0, footer:0 }

    componentDidMount(){
        console.log("Component did mount")
        this.setState({ booklisting: bookListing})
        //this.state = { booklisting: bookListing }
    }

    render() {
        //console.log(bookListing);
        // const localbookListing = bookListing;
//         const navBar =  <Navbar bg="light" expand="lg">
//                           <Navbar.Brand href="#home">BookShelf</Navbar.Brand>
//                             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                             <Navbar.Collapse id="basic-navbar-nav">
//                           <Nav className="mr-auto">
//       <Nav.Link href="#home">Home</Nav.Link>
//       <Nav.Link href="#link">Link</Nav.Link>
//       <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//       </NavDropdown>
//     </Nav>
//     <Form inline>
//       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//       <Button variant="outline-success">Search</Button>
//     </Form>
//   </Navbar.Collapse>
// </Navbar>;





        const tableStyle = { "border": "1px solid black" ,"padding": "10px"}
        const colNames = ["Book Title", "Author", "Year", "Series", "Rating"];
        const tableHeader = <tr style={tableStyle}>{colNames.map((col) => <th>{col}</th>)} </tr>;

        const tableBody = this.state.booklisting.map((book) => <tr key={book.id} style={tableStyle}>
                         <td style={tableStyle}>{book.title}</td>
                         <td style={tableStyle}>{book.author}</td> 
                         <td style={tableStyle}>{book.year}</td> 
                         <td style={tableStyle}>{book.series}</td>
                         <td style={tableStyle}>{book.rating}</td>
                          </tr>);
        //const bootStrapTable = <Table striped bordered hover variant="dark">  <thead>   {tableHeader}   </thead>  {tableBody}     </Table>;
        const bookTable = <table className="bookTable" style={tableStyle}>  {tableHeader} {tableBody} </table>;
    return ( <div> {bookTable}</div>);
    }
}
 
export default BookTable;