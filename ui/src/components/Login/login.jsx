import React, { Component } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

class Login extends Component {
  state = {};

  prepareLoginPage() {
    const loginForm = (
      <div class="px-2">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Keep Me Logged in" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
    return loginForm;
  }

  render() {
    const loginForm = this.prepareLoginPage();
    return (
      <Row className="loginForm">
        <Col className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto  text-center form p-4">
          <h1 class="display-4 py-2 text-truncate">Login to BookShelf.</h1>
          {loginForm}
        </Col>
      </Row>
    );
  }
}

export default Login;
