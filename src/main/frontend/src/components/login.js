import React, { Component } from "react";
import "./login.css";

import { Card, Form, Button } from "react-bootstrap";

import AuthenticationService from "../service/AuthticationService";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    AuthenticationService.executeBasicAuthenticationService(
      this.state.username,
      this.state.password
    )
      .then(() => {
        AuthenticationService.registerSuccessfulLogin(
          this.state.username,
          this.state.password
        );
        this.props.history.push("/dashboard");
      })
      .catch(() => {
        this.setState({ showSuccessMessage: false });
        this.setState({ hasLoginFailed: true });
      });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <Card
        className="card"
        bg={"#B0B6C2"}
        text={"white"}
        style={{ width: "35rem" }}
      >
        <Card.Header>Login as Administrator</Card.Header>
        <Form onSubmit={this.handleSubmit} id="login">
          <Card.Body>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                required
                type="username"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                placeholder="Username"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="Password"
              />
            </Form.Group>

            <Button className="button" variant="success" type="submit">
              Login
            </Button>
          </Card.Body>
        </Form>
      </Card>
    );
  }
}
