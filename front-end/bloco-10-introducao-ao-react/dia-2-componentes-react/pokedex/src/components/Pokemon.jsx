import { Component } from "react";
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { pokemon } = this.props;
    const { name, type, averageWeight: {value, measurementUnit}, image } = pokemon;

    return (
      <li>
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight:
            <span>
              {` ${value} ${measurementUnit}`}
            </span>
          </p>
        </div>
        <img src={image} alt='imagem' />
      </li>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
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

export default Pokemon;