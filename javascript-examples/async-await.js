//async function fetchData() {
//  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
//  const json = await response.json();
//  console.log(json);
//}

//fetchData();//.then(() => console.log("function executed"));
const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
const json = await response.json();
console.log(json);
