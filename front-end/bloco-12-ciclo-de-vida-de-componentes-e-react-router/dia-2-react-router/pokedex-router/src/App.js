import React from 'react';
import { Route, Switch } from 'react-router-dom';
import pokemons from './data';
import Pokedex from './components/Pokedex';
import About from './pages/About';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={'/'} render={ () => <Pokedex pokemons={ pokemons } /> } />
        <Route exact path={'/about'} component={ About } />
      </Switch>
    </div>
  );
}

export default App;
