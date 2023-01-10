import React, { Component } from 'react';
import './App.css';
import PersonalForm from './components/PersonalForm';

class App extends Component {
  state = {
    name: '',
    email: '',
    cpf: '',
  }

  handleChange = ({ target: { name, value } }) => {
    let valueUpperCase = value;

    if (name === 'name') valueUpperCase = value.toUpperCase();

    this.setState((prevState) => ({
      ...prevState,
      [name]: valueUpperCase,
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Formulário</h1>
        </header>
        <PersonalForm
          handleChange={ this.handleChange }
          { ...this.state }
        />
      </div>
    );
  }
} 

export default App;
