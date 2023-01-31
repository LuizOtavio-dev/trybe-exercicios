import React, { Component } from "react";
import PropTypes from 'prop-types';
// import Pokemon from "../components/Pokemon";
import { pokemonType } from "../types";

class PokemonDetails extends Component {
  render() {
    const { match: { params: id }, pokemons } = this.props;
    const pokemon = pokemons.find((pokemon) => pokemon.id === Number(id.id) )
    return (
      <>
        <h1>{ `${pokemon.name} Details` }</h1>
      </>
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
