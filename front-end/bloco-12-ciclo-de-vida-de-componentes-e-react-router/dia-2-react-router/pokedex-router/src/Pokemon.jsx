import React from 'react';
import './pokemon.css';
import { pokemonType } from './types';

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props;
    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight:
            {' '}
            {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </div>
        <img src={ image } alt={ `${name} sprite` } />
      </div>
    );
  }
}
Pokemon.propTypes = {
  pokemon: pokemonType.isRequired,
};
export default Pokemon;
