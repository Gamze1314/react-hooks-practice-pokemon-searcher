import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage( { allPokemons }) {

console.log(allPokemons) // 149 pokemons passed down from Pokemon Page. 




  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search  />
      <br />
      <PokemonCollection allPokemons={allPokemons} />
    </Container>
  );
}

export default PokemonPage;
