import React from "react";
import "./App.css";

import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthenciatedRoute from "./components/authenticatedRoute";

import NavigationBar from "./components/navigationBar";
import Welcome from "./components/welcome";
import Footer from "./components/footer";
import Pokemon from "./components/pokemon";
import Login from "./components/login";
import Logout from "./components/logout";
import DashBoard from "./components/dashboard";

function App() {
  const marginTop = {
    marginTop: "100px",
  };

  return (
    <Router>
      <NavigationBar />
      <Container>
        <Row>
          <Col lg={12} style={marginTop}>
            <Switch>
              <Route path="/" exact component={Welcome} />
              <Route path="/pokemon" exact component={Pokemon} />
              <Route path="/login" exact component={Login} />
              <AuthenciatedRoute path="/logout" exact component={Logout} />
              <AuthenciatedRoute
                path="/dashboard"
                exact
                component={DashBoard}
              />
            </Switch>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
