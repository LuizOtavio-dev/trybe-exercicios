import React, { Component } from "react";
import PropTypes from 'prop-types';

class PersonalForm extends Component {
  render() {
    const {
      name,
      email,
      cpf,
      emailError,
      handleChange,
    } = this.props;
    
    return (
      <fieldset>
        <legend>Dados Pessoais</legend>
        <label htmlFor="name">
          Nome
          <input
            id="name"
            type="text"
            name="name"
            maxLength="40"
            value={ name }
            onChange={ handleChange }
            required
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            name="email"
            maxLength="50"
            value={ email }
            onChange={ handleChange }
            required
          />
        </label>
        <span>{ emailError }</span>
        <label htmlFor="cpf">
          CPF
          <input
            id="cpc"
            type="text"
            name="cpf"
            maxLength="11"
            value={ cpf }
            onChange={ handleChange }
            required
          />
        </label>
      </fieldset>
    );
  }
}

PersonalForm.propTypes = ({
  name: PropTypes.string,
  email: PropTypes.string,
  cpf: PropTypes.string,
  emailError: PropTypes.string,
  handleChange: PropTypes.func,
}).isRequired;

PersonalForm.defaultProps = {
  name: '',
  email: '',
  cpf: '',
  emailError: '',
  handleChange: () => {},
}

export default PersonalForm;
