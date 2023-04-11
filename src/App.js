import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  const [valor, setValor] = useState();

  return (
    <div className="App">
      <h2>Seja bem-vindo!</h2>
      <form>
        <input onChange={(e) => setValor(e.target.value)}></input>
      </form>

      <p>{valor}</p>
    </div>
  );
}

export default App;
