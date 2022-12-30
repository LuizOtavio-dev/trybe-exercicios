import './App.css';
import datas from './data'
import Pokemon from './components/Pokemon';
import Pokedex from './components/Pokedex';

function App() {
  return (
    <div className="App">
      <ul>
        {datas.map((data) => <Pokemon pokemon={data}/>)}
      </ul>
      <Pokedex />
    </div>
  );
}

export default App;
