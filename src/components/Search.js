import React from "react";

function Search({ setSearchText, onSearchPokemon }) {
  const handleChange = (e) => {
    setSearchText(e.target.value);
    onSearchPokemon();
  };

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleChange} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
