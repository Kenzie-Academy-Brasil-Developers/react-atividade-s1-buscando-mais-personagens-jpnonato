import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Characters from './components/Characters';

function App() {

  const [char, setChar] = useState([])
  const [next, setNext] = useState(1)

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${next}`).then(response => {
       return response.json()}).then( response => setChar(response.results))
  },[next])

  const aumentar = () => {
    if( next < 34 ){
      setNext( next + 1)
      }
  }

  const diminuir = () => {
    if( next > 1 ){
    setNext( next - 1)
    }
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <Characters char={char}></Characters>
      <section>
        <button onClick = {diminuir}> Back</button>
        <button onClick = {aumentar}> Next </button>
      </section>
      <h2> page N: {next}</h2>
      </header>
    </div>
  );
}

export default App;

