// NOTE: (2/6/24) This file may change soon with some portions going elsewhere and comments added for explanation
// If you come back to this file and see something different, I'll include links to the new files
async function fetchData() {
  const [response1, response2 ] = await Promise.all([
    fetch("https://pokeapi.co/api/v2/pokemon/ditto"),
    fetch("https://pokeapi.co/api/v2/pokemon/charizard")
  ]);
  const [json1, json2] = await Promise.all([response1.json(), response2.json()]);
  console.log(json1, json2);
  return [json1, json2];
}

console.log(await fetchData());

//fetchData();//.then(() => console.log("function executed"));

/* const response1 = await fetch("https://pokeapi.co/api/v2/pokemon/ditto"); */
/* const response2 = await fetch("https://pokeapi.co/api/v2/pokemon/charizard"); */

/* const [response1, response2] = await Promise.all([ */
/*   fetch("https://pokeapi.co/api/v2/pokemon/ditto"), */
/*   fetch("https://pokeapi.co/api/v2/pokemon/charizard") */
/* ]); */


fetch("https://pokeapi.co/api/v2/pokemon/lucario")
  .then(response => response.json())
  .then(json => console.log(json))
  .finally(() => console.log('fetch complete'));
console.log('next thing to compute');

/* const [json1, json2] = await Promise.all([response1.json(), response2.json()]); */
/* console.log(json1, json2); */

