import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then(response => {
      return response.json()
    })
    .then(response => {
      setPokemon(response.results)
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);
  return (
    <div style={{textAlign:"center", height: "auto"}}>
      {
        pokemon.map((pokeMon,index) => {
          return (
            <p style={{margin: "10px", textAlign:"center"}} key={index}>{pokeMon.name}</p>
          )
        })
      }
    </div>
  );
}

export default App;
