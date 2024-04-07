import React , { useState } from "react";
import { Form } from "semantic-ui-react";

//controlled Form => update state 
// add POST request 

function PokemonForm({ addNewPokemon}) {
const [name, setName] = useState("")
const [hp, setHp] = useState("")
const [frontUrl, setFrontUrl] = useState("")
const [backUrl, setBackUrl] = useState("")

const handleSubmit = (e) => {
  e.preventDefault()

const pokemonData = {
  name : name,
  hp : hp, 
  sprites : {
    front : frontUrl,
    back : backUrl
  }
}

fetch("http://localhost:3001/pokemon", {
  method : "POST",
  headers : {
    "Content-Type" : "application/json"
  },
  body : JSON.stringify(pokemonData)
})
.then(res => res.json())
.then(newPokemonData => addNewPokemon(newPokemonData))
}


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit} >
        <Form.Group widths="equal">
          <Form.Input 
          onChange={(e) => setName(e.target.value)}
          value={name}
          fluid label="Name" 
          placeholder="Name" 
          name="name" 
          />
          <Form.Input 
          onChange={(e) => setHp(e.target.value)}
          value={hp}
          fluid label="hp" 
          placeholder="hp" 
          name="hp" 
          />
          <Form.Input
          onChange={(e) => setFrontUrl(e.target.value)}
          value={frontUrl}
          fluid label="Front Image URL"
          placeholder="url"
          name="frontUrl"
          />
          <Form.Input
          onChange={(e) => setBackUrl(e.target.value)}
          value={backUrl}
          fluid label="Back Image URL"
          placeholder="url"
          name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
