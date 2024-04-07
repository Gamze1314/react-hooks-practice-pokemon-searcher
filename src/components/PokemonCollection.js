import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ allPokemons }) {
  // mapp over the array and return PokemonCard for each 

  return <Card.Group itemsPerRow={6}>{
    allPokemons.map((pokemon) => (
      <PokemonCard key={pokemon.name} pokemon={pokemon} />
    ))
  }</Card.Group>;
}

export default PokemonCollection;
