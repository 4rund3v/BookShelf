import React from "react";

const BookListing = ({ book, tableStyle }) => {
  return (
    <React.Fragment>
      <tr key={book.id} style={tableStyle}>
        <td style={tableStyle}>{book.title}</td>
        <td style={tableStyle}>{book.author}</td>
        <td style={tableStyle}>{book.year}</td>
        <td style={tableStyle}>{book.series}</td>
        <td style={tableStyle}>{book.rating}</td>
      </tr>
    </React.Fragment>
  );
};

export default BookListing;
