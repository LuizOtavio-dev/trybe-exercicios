import React from 'react';
import { pokemonType } from '../types';
import PropTypes from 'prop-types';

import '../styles/pokemon.css';
import { Link } from 'react-router-dom';

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight, image, id }, hideLinkDetails } = this.props;
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
          { !hideLinkDetails && <Link to={ `/pokemon/${id}` }>Details</Link> }
        </div>
        <img src={ image } alt={ `${name} sprite` } />
      </div>
    );
  }
}
Pokemon.propTypes = {
  pokemon: pokemonType.isRequired,
  hideLinkDetails: PropTypes.bool.isRequired,
};
export default Pokemon;
