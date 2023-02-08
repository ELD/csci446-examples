async function fetchData() {
  let [pokemon1, pokemon2] = await Promise.all([
      fetch('https://pokeapi.co/api/v2/pokemon/ditto'),
      fetch('https://pokeapi.co/api/v2/pokemon/charizard')
  ]);

  let [json1, json2] = await Promise.all([pokemon1.json(), pokemon2.json()]);

  console.log(json1, json2);
}