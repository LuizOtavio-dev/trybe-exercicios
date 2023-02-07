import React from 'react';
import { pokemonType } from '../types';
import PropTypes from 'prop-types';

import '../styles/pokemon.css';
import { Link } from 'react-router-dom';

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeight, image, id }, hideLinkDetails, favorite } = this.props;
    const isFavorite = favorite 
      ? 'https://affaso.com/wp-content/uploads/2020/06/5-point-stars-png-star-icon-flat-11562958768wpf63hu4tq.png'
      : 'https://upload.wikimedia.org/wikipedia/commons/f/fd/A_star.png';
    
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
        <img src={ isFavorite } alt='pokemon favoritado' className='favorite-icon'/>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: pokemonType.isRequired,
  hideLinkDetails: PropTypes.bool.isRequired,
};
export default Pokemon;
