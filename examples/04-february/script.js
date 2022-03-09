let button = document.querySelector("#addPokemon");
let input = document.querySelector("#pokemonName");

button.addEventListener("click", function () {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((body) => body.json())
    .then((pokemon) => insertPokemon(pokemon));
});

function insertPokemon(pokemon) {
  let image_url = pokemon.sprites.front_default;
  let name = pokemon.name;
  let id = pokemon.id;

  let card = document.createElement("div");

  let header = document.createElement("h1");
  header.textContent = `${name} - ${id}`;

  let image = document.createElement("img");
  image.setAttribute("src", image_url);
  image.setAttribute("alt", `front view of ${name}`);

  card.append(header);
  card.append(image);

  document.body.appendChild(card);
}
