import React, { useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({ addNewPokemon , allPokemons }){
  const [searchTerm, setSearchTerm] = useState("");

  console.log(allPokemons); // 149 pokemons passed down from Pokemon Page.

  // if searchTerm is matching with pokemon name
  // if the input field is empty => no search term
  // filter array, then updatte state with filtered results

  const filteredPokemons = allPokemons.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  ); 


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPokemon={addNewPokemon} />
      <br />
      <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <br />
      <PokemonCollection allPokemons={filteredPokemons} />
    </Container>
  );
}

export default PokemonPage;
