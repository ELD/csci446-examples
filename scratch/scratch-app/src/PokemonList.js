const PokemonList = () => {
  const addPokemonHandler = (pokemonName) => {
    // TODO: Do my data fetching, then signal to the PokemonList that I want to mutate the state
  }

  return (
    <AddPokemonForm handleSubmit={addPokemonHandler} />
    {pokemonList.map((pokemon) => {
      <Pokemon pokemon={pokemon} />
    })}
  );
}
