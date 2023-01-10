import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddressForm extends Component {
  render() {
    const {
      address,
      city,
      countryState,
      addressType,
      handleChange,
      handleBlur,
    } = this.props;

    const states = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO',
      'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
      'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

    return (
      <fieldset>
        <legend>Dados de Endereço</legend>
        <label htmlFor="address">
          Endereço
          <input
            type="text"
            name="address"
            id="address"
            maxLength="200"
            required
            value={ address }
            onChange={ handleChange }  
          />
        </label>
        <label htmlFor="city">
          Cidade
          <input
            type="text"
            name="city"
            id="city"
            maxLength="28"
            required
            value={ city }
            onChange={ handleChange }
            onBlur={ handleBlur }
          />
        </label>
        <label htmlFor="countryState">
          Estado
          <select
            name="countryState"
            id="countryState"
            required
            value={ countryState }
            onChange={ handleChange }  
          >
            <option value="">Selecione</option>
            {
              states.map((state) => (
                <option value={ state } key={ state }>{ state }</option>  
              ))
            }
          </select>
        </label>
        <label htmlFor="house">
          <input
            type="radio"
            name="addressType"
            id="house"
            value="Casa"
            checked={ addressType === 'Casa'}
            onChange={ handleChange }  
          />
          Casa
        </label>
        <label htmlFor="apart">
          <input
            type="radio"
            name="addressType"
            id="apart"
            value="Apartamento"
            checked={ addressType === 'Apartamento'}
            onChange={ handleChange }  
          />
          Apartamento
        </label>
      </fieldset>
    );
  }
}

AddressForm.propTypes = ({
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  address: PropTypes.string,
  city: PropTypes.string,
  countryState: PropTypes.string,
  addressType: PropTypes.string,
}).isRequired;

AddressForm.defaultProps = {
  handleChange: () => {},
  handleBlur: () => {},
  address: '',
  city: '',
  countryState: '',
  addressType: '',
};

export default AddressForm;
