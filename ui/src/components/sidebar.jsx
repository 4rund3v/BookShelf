import React, { Component } from "react";
import { Nav } from "react-bootstrap";

class SideBar extends Component {
  state = {};
  render() {
    return (
      <Nav
        className="col-md-12 d-none d-md-block bg-light sidebar"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <div className="sidebar-sticky">
          <Nav.Item>
            <Nav.Link href="/home">Books</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Manga</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Documents</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Settings
            </Nav.Link>
          </Nav.Item>
        </div>
      </Nav>
    );
  }
}

export default SideBar;
