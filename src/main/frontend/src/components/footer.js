import React from "react";
import { Navbar, Container, Col } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    let fullyear = new Date().getFullYear();

    return (
      <Navbar fixed="bottom" bg="light" variant="light">
        <Container>
          <Col lg={12} className="text-center text muted">
            <div>
              {fullyear}-{fullyear + 1}, All Rights Reserved by Who Reserves The
              Rights
            </div>
          </Col>
        </Container>
      </Navbar>
    );
  }
}

export default Footer;
