import React, { Component } from 'react';
import SideBar from './sidebar';
import MainContent from './mainContent';
import TopBar from './topbar';
import {Row, Col, Container} from 'react-bootstrap';

class Home extends Component {
    state = {  }
    render() { 
        return (
        <div className="Home">
          <Container fluid>
            <Row>
              <Col><TopBar /></Col>
            </Row>
            <Row>
              <Col xs={2}><SideBar /></Col>
              <Col xs={10}><MainContent /></Col>
            </Row>
          </Container>
          <footer className='footer'>
            <div className='container'>
              <span className="text-muted">BookShelf 2020</span>
            </div>
          </footer>
        </div>
          );

    }
}
 
export default Home;