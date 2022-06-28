
import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
    .then((response) => {
      console.log("Pokemon Data", response.data.results)
      setPokemon(response.data.results)
    })
    .catch((err) => console.error("Error with axios", err.message))

  }, []);
  return (
    <div style={{textAlign:"center", height: "auto"}}>
      {
        pokemon.map((pokeMon,index) => (
            <p style={{margin: "10px", textAlign:"center"}} key={index}>{pokeMon.name}</p>
        ))
      }
    </div>
  );
};

export default App;
