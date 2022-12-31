import { Component } from "react";
import Pokemon from "./Pokemon";
import PropTypes from 'prop-types';

class Pokedex extends Component {
  render() {
    const { pokemonList } = this.props;
    return (
      <>
        <h1> Pokédex </h1>
        <ul>
          {
            pokemonList
              .map((pokemon) => <Pokemon key={ pokemon.id } pokemon={ pokemon } />)
          }
        </ul>
      </>
    );
  }
}

Pokedex.defaultProps = {
  pokemonList: [],
}

Pokedex.propTypes = {
  pokemonList: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.string,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string,
  }).isRequired,
};

export default Pokedex;