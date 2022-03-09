import "./App.css";
import { useState } from "react";
import Form from "./Form";
import Pokemon from "./Pokemon";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [textInput, updateTextInput] = useState("");

  const addNewPokemon = (pokemonName) => {};

  // Option 1:
  // const updateExistingPokemon = (originalPokemon, newPokemon) => {
  //    ... this is also the interesting bit
  // };

  // Option 2:
  // const updateExistingPokemon = (idxToReplace, newPokemon) => {
  //   // ... this is also the interesting bit
  // };

  console.log(pokemon);
  return (
    <main>
      <Form onSubmit={addNewPokemon}>
        <Form.TextInput
          value={textInput}
          onChange={(e) => updateTextInput(e.target.value)}
        />
        <Form.Button>Add Pokemon</Form.Button>
      </Form>
      {pokemon.map((pokemon, idx) => (
        <Pokemon
          pokemon={pokemon}
          key={idx}
          index={idx}
          // updateFn={updateExistingPokemon}
        />
      ))}
    </main>
  );
}

export default App;
