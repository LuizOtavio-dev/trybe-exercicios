import React from 'react';
import { Route, Switch } from 'react-router-dom';
import pokemons from './data';
import Pokedex from './components/Pokedex';
import About from './pages/About';
import PokemonDetails from './pages/PokemonDetails';
import Header from './components/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path={'/'} render={ () => <Pokedex pokemons={ pokemons } /> } />
        <Route exact path={'/about'} component={ About } />
        <Route exact path={'/pokemon/:id'} render={ (props) => <PokemonDetails { ...props } pokemons={ pokemons } /> } />
      </Switch>
    </div>
  );
}

export default App;
