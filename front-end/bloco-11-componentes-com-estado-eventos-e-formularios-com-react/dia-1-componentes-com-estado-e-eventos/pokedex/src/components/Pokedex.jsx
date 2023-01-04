import { Component } from "react";
import Pokemon from "./Pokemon";
import PropTypes from 'prop-types';

class Pokedex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
    }

    this.nextpoke = this.nextpoke.bind(this);;
  }

  nextpoke(list) {
    this.setState(({index}) => ({
      index: (index + 1) % list.length
    }))
  }

  render() {
    const { pokemonList } = this.props;
    const { index } = this.state;
    return (
      <>
        <h1> Pokédex </h1>
        <ul>
          {<Pokemon pokemon={ pokemonList[index] } />}
        </ul>
        <button onClick={() => this.nextpoke(pokemonList)}>Próximo Pokemon</button>
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
