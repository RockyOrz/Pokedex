import React, { Component } from "react";

import "./pokemon.css";
import Figure from "react-bootstrap/Figure";

import Path from "path";
import axios from "axios";

export default class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
    };
  }

  componentDidMount() {
    this.findAllPokemon();
  }

  findAllPokemon() {
    axios
      .get("http://localhost:8080/pokedex/pokemon")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ pokemons: data });
      });
  }

  render() {
    return (
      <div className="row">
        {this.state.pokemons.map((pokemon) => (
          <div className="column" key={pokemon.id}>
            <Figure>
              #{pokemon.id} {pokemon.pokemon_name}
              <br />
              <Figure.Image
                rounded
                width={200}
                height={200}
                alt="171x180"
                src={Path.join("/images/", pokemon.id + ".jpg")}
              />
              <Figure.Caption>
                {pokemon.main_type} {pokemon.sub_type}
              </Figure.Caption>
              <br />
              <br />
              <br />
            </Figure>
          </div>
        ))}
      </div>
    );
  }
}
