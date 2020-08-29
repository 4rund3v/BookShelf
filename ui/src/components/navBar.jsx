import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Navbar, NavDropdown, Form , Button, Nav, FormControl} from 'react-bootstrap';

class NavBarCustom extends Component {
    state = {  }
    render() {
        const bootstrapNavBar = 
            <Navbar bg="light" expand="lg">
                 <Navbar.Brand href="#home"> BookShelf </Navbar.Brand>
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">HomePage</Nav.Link>
                  <Nav.Link href="#link">Books</Nav.Link>
                  <NavDropdown title="Books" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                   <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>           
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Navbar> ;
        const customersLink =  <Link to="">            Customers            </Link>
    return ( <div className="customNavBar"> {bootstrapNavBar} {customersLink} </div> );
    }
}
 
export default NavBarCustom;