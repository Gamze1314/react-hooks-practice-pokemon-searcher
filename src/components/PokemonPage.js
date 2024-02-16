import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((r) => r.json())
      .then((data) => setPokemons(data));
  }, []);

  const onSearchPokemon = () => {
    const lowerCasedText = searchText.toLowerCase();
    const updatedPokemons = pokemons.filter((p) =>
      p.name.toLowerCase().includes(lowerCasedText)
    );
    setPokemons(updatedPokemons);
  };

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search setSearchText={setSearchText} onSearchPokemon={onSearchPokemon} />
      <br />
      <PokemonCollection searchText={searchText} pokemons={pokemons} />
    </Container>
  );
}

export default PokemonPage;
