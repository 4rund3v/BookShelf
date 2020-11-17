import React, { Component } from "react";

const TopBar = () => {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        BookShelf
      </a>
      <div className="container">
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default TopBar;
