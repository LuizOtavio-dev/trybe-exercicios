import { Component } from "react";
import Pokemon from "./Pokemon";
import PropTypes from 'prop-types';
import Button from "./Button";

class Pokedex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      type: 'all',
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
        if (type === 'all') return true;
        return pokemon.type === type;
      })
    )

    return filter;
  }

  pokemonTypes() {
    const {pokemonList} = this.props;
    const types = [];

    pokemonList.forEach(({type}) => {
      if (!types.includes(type)) types.push(type)
    })

    return types;
  }

  render() {
    const { index } = this.state;
    return (
      <>
        <h1> Pokédex </h1>
        <ul>
          {<Pokemon pokemon={this.fetchFiltered()[index]} />}
        </ul>
        <Button
          onClick={() => this.filterPoke('all')}
          className='filter-btn'  
        >
          All
        </Button>
        {
          this.pokemonTypes().map((type) => (
            <Button
              key={type}
              onClick={() => this.filterPoke(type)}
              className='filter-btn'
            >
              {type}
            </Button>
          ))
        }
        <Button
          onClick={() => this.nextPoke(this.fetchFiltered())}
          className='filter-btn'
          disabled={this.fetchFiltered().length <= 1}
        >
          Next Pokémon
        </Button>
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
