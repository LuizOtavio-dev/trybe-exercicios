import React, { Component } from 'react';
import './App.css';
import AddressForm from './components/AddressForm';
import PersonalForm from './components/PersonalForm';
import handleValue from './utils/handleValue';

class App extends Component {
  state = {
    name: '',
    email: '',
    cpf: '',
    address: '',
    city: '',
    countryState: '',
    addressType: '',
  }

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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Formulário</h1>
        </header>
        <main>
          <form>
            <PersonalForm
              handleChange={ this.handleChange }
              { ...this.state }
            />
            <AddressForm
              handleChange={ this.handleChange }
              handleBlur={ this.handleBlur }
              { ...this.state }
            />
          </form>
        </main>
      </div>
    );
  }
} 

export default App;
