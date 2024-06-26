import React, { useState, useEffect } from "react";
import PokemonPage from "./PokemonPage";

function App() {
  const [allPokemons, setAllPokemons] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(res => res.json()) 
    .then(data => setAllPokemons(data))
  },[])


  const addNewPokemon = (newPokemon) => {
    setAllPokemons([...allPokemons, newPokemon])
  }
  

if(allPokemons.length > 0) {
  return (
    <div className="App">
      <PokemonPage allPokemons={allPokemons} addNewPokemon={addNewPokemon} />
    </div>
  );
} else {
  return (
    <div className="App">
      <h1>Loading...</h1>
    </div>
  )
}

}

export default App;
