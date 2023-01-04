import { Component } from "react";
import Pokemon from "./Pokemon";
import PropTypes from 'prop-types';

class Pokedex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      type: '',
    }

    this.nextpoke = this.nextPoke.bind(this);
    this.filterPoke = this.filterPoke.bind(this);;
    this.fetchFiltered = this.fetchFiltered.bind(this);
  }

  nextPoke(list) {
    this.setState(({index}) => ({
      index: (index + 1) % list.length
    }))
  }

  filterPoke(type) {
    this.setState({index: 0, type})
  }

  fetchFiltered() {
    const { pokemonList } = this.props;
    const { type } = this.state;

    const filter = (
      pokemonList.filter((pokemon) => {
        if (type === '') return true;
        return pokemon.type === type;
      })
    )

    return filter;
  }

  render() {
    const { index } = this.state;
    return (
      <>
        <h1> Pokédex </h1>
        <ul>
          {<Pokemon pokemon={this.fetchFiltered()[index]} />}
        </ul>
        <button onClick={() => this.nextPoke(this.fetchFiltered())}>Próximo Pokemon</button>
        <button onClick={() => this.filterPoke('Electric')}>Tipo Eletrico</button>
        <button onClick={() => this.filterPoke('Fire')}>Tipo Fogo</button>
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
