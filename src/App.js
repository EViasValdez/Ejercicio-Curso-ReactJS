import PlaceholderImage from './img/Placeholder.png';
import './App.css';
import { useState } from 'react';
import Pokems from './components/Pokems';

function App() {
  const [names, setNames] = useState(null);

  const ReqAPI = async () => {
    const API = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0');
    const PokmAPI = await API.json();

    setNames(PokmAPI.results);
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1 className="title">API</h1>
        {names ? (
          <Pokems names={names} setNames={setNames}/>
        ):(
          <>
          <img src={PlaceholderImage} alt="Placeholder" className="img-home" />
          <button onClick={ReqAPI} className="btn-search">
            Buscar
          </button>
          </>
        )};
      </header>
    </div>
  );
}

export default App;