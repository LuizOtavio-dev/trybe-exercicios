import React, { Component } from 'react';
import './App.css';
import AddressForm from './components/AddressForm';
import DataDisplay from './components/DataDisplay';
import PersonalForm from './components/PersonalForm';
import ProfessionalForm from './components/ProfessionalForm';
import handleValue from './utils/handleValue';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: 'Casa',
  resume: '',
  role: '',
  roleDescription: '',
  displayData: false,
}

class App extends Component {
  state = INITIAL_STATE;

  handleChange = ({ target: { name, value } }) => {
    let valueUpperCase = handleValue(name, value);

    this.setState((prevState) => ({
      ...prevState,
      [name]: valueUpperCase,
    }))
  }

  handleBlur = ({ target: { name, value }}) => {
    if (name === 'city' && /^\d/.test(value)) {
      this.setState({
        [name]: '',
      })
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      displayData: true,
    })
  };

  handleClear = () => {
    this.setState(INITIAL_STATE);
  };

  render() {
    const { displayData } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Formulário</h1>
        </header>
        <main>
          <form onSubmit={ this.handleSubmit }>
            <PersonalForm
              handleChange={ this.handleChange }
              { ...this.state }
            />
            <AddressForm
              handleChange={ this.handleChange }
              handleBlur={ this.handleBlur }
              { ...this.state }
            />
            <ProfessionalForm
              handleChange={ this.handleChange }
              { ...this.state }
            />
            <button type='submit'>Enviar</button>
            <button type='reset' onClick={ this.handleClear }>Limpar</button>
            { displayData && <DataDisplay { ...this.state } /> }
          </form>
        </main>
      </div>
    );
  }
} 

export default App;
