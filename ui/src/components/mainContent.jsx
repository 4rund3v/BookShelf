import React, { Component } from "react";
import BookTable from "./bookTable";

class MainContent extends Component {
  state = {};
  render() {
    return (
      <div>
        {" "}
        <BookTable />{" "}
      </div>
    );
  }
}

export default MainContent;
