import './App.css';
import datas from './data'
import Pokemon from './components/Pokemon';

function App() {
  return (
    <div className="App">
      <ul>
        {datas.map((data) => <Pokemon pokemon={data}/>)}
      </ul>
    </div>
  );
}

export default App;
