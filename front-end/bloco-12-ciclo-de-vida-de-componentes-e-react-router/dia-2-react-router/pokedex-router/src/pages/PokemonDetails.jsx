import React, { Component } from "react";
import PropTypes from 'prop-types';
import Pokemon from "../components/Pokemon";
import { pokemonType } from "../types";

class PokemonDetails extends Component {
  render() {
    const { match: { params: id }, pokemons } = this.props;
    const pokemon = pokemons.find((pokemon) => pokemon.id === Number(id.id) )
    return (
      <section className="pokemon-details">
        <h1>{ `${pokemon.name} Details` }</h1>
        <Pokemon pokemon={ pokemon } hideLinkDetails />
        <h2>Sumário</h2>
        <p>{ pokemon.summary }</p>
        <h2>Hábitat:</h2>
        <section className="pokemon-habitat">
          {
            pokemon.foundAt.map(({ location, map }) => (
              <section key={ location }>
                <span>{ location }</span>
                <img src={ map } alt="mapa do pokemon" />
              </section>
            ))
          }
        </section>
      </section>
    );
  }
}

PokemonDetails.propTypes = {
  pokemons: PropTypes.arrayOf(pokemonType.isRequired).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired
};

export default PokemonDetails;
