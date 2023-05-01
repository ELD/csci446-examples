import { useState } from "react";
import StyledPokemon from './Pokemon';

function App() {
  const [pokemon, setPokemon] = useState({});
  const [pokemonName, setPokemonName] = useState('');
  const handleFormSubmission = (event) => {
    event.preventDefault();

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((body) => body.json())
      .then((json) => {
        setPokemon(json);
      });
  };

  return (
    <>
      <div>
        <form onSubmit={handleFormSubmission}>
          <input type="text" placeholder="Pokemon name..." onChange={(e) => setPokemonName(e.target.value)} value={pokemonName} />
          <button type="submit">Fetch Pokemon</button>
        </form>
      </div>
      <div>
        {pokemon?.species ? (
          <StyledPokemon name={pokemon.name} sprite={pokemon.sprites.front_default} />
        ) : null}
      </div>
    </>
  );
}

export default App;
