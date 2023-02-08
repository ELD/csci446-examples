fetch(`https://pokeapi.co/api/v2/pokemon/ditto`) // Promise<Response>
  .then((data) => data.json()) // Promise<Object> ... Promise<PokemonObject>
  .then((json) => console.log(json)); // Promise<undefined>