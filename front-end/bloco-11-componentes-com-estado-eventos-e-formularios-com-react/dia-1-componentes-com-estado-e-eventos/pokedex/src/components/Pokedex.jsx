import { Component } from "react";
import PropTypes from 'prop-types';
import Pokemon from "./Pokemon";
import Button from "./Button";
import '../styles/Pokedex.css';

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
    this.pokemonTypes = this.pokemonTypes.bind(this);
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
      <div className='pokedex'>
        <h1> Pokédex </h1>
        <ul className="pokedex">
          {<Pokemon pokemon={this.fetchFiltered()[index]} />}
        </ul>
        <div className="pokedex-buttons-panel">
          <Button
            type='button'
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
            type='button'
            onClick={() => this.nextPoke(this.fetchFiltered())}
            className='pokedex-btn'
            disabled={this.fetchFiltered().length <= 1}
          >
            Next Pokémon
          </Button>
        </div>
      </div>
    );
  }
}

Pokedex.defaultProps = {
  pokemonList: [],
}

Pokedex.propTypes = {
  pokemonList: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Pokedex;
