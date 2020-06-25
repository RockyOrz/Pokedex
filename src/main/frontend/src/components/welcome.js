import React from "react";

import { Jumbotron } from "react-bootstrap";

class Welcome extends React.Component {
  render() {
    return (
      <Jumbotron className="bg-dark text-white">
        <h1>Welcome to Pokedex</h1>
        <p>This Pokdex website is a demo for study use</p>
      </Jumbotron>
    );
  }
}

export default Welcome;
