import React, { Component } from 'react';

class BookListing extends Component {
    state = { book:{}, tableStyle:{} }
    componentDidMount(){
        console.log("BookListing: componentDidMount : props here are -->", this.props);
        const book = this.props.book;
        const tableStyle = this.props.tableStyle;
        this.setState({ "book": book, tableStyle:tableStyle})
    }

    render() {
        const book= this.state.book;
        const tableStyle = this.state.tableStyle;
        return (<tr key={book.id} style={tableStyle}>
                <td style={tableStyle}>{book.title}</td>
                <td style={tableStyle}>{book.author}</td> 
                <td style={tableStyle}>{book.year}</td> 
                <td style={tableStyle}>{book.series}</td>
                <td style={tableStyle}>{book.rating}</td>
            </tr>
            );
    }
} 
export default BookListing;