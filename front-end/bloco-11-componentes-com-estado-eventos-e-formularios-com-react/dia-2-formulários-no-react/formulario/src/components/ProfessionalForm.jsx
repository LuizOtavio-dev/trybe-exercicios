import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProfessionalForm extends Component {
  state = {
    alertWasDisplayed: false,
  }

  onMouseEnterHandler = () => {
    const { alertWasDisplayed } = this.state;

    if (!alertWasDisplayed) {
      global.alert('Preencha com cuidade esta informação.');
      this.setState({ alertWasDisplayed: true });
    }
  };

  render() {
    const {
      resume,
      role,
      roleDescription,
      handleChange,
    } = this.props;

    return (
      <fieldset>
        <legend>Dados Profissionais:</legend>
        <label htmlFor="resume">
          Resumo do currículo
          <textarea
            name='resume'
            id='resume'
            maxLength='1000'
            required
            value={ resume }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="role">
          Cargo
          <input
            type='text'
            name='role'
            id='role'
            maxLength='40'
            required
            value={ role }
            onChange={ handleChange }
            onMouseEnter={ this.onMouseEnterHandler }
          />
        </label>
        <label htmlFor="roleDescription">
          Descrição do Cargo
          <textarea
            name='roleDescription'
            id='roleDescription'
            maxLength='500'
            required
            value={ roleDescription }
            onChange={ handleChange }
          />
        </label>
      </fieldset>
    )
  }
}

ProfessionalForm.propTypes = ({
  resume: PropTypes.string,
  role: PropTypes.string,
  roleDescription: PropTypes.string,
  handleChange: PropTypes.func,
}).isRequired;

ProfessionalForm.defaultProps = {
  resume: '',
  role: '',
  roleDescription: '',
  handleChange: () => {},
};

export default ProfessionalForm;
