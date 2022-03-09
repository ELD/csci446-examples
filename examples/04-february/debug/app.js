function submitPokemon(pokemonChoice) {
  console.log("pokemon");
  let body = document.body;
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonChoice}`)
    .then((response) => response.json())
    .then((pokemon) => {
      let url = pokemon.sprites.front_default;
      let image = document.createElement("img");
      image.setAttribute("src", url);
      body.append(image);
    });
}

function formSubmit(event) {
  console.log(event);
  let pokemonChoice = document.getElementById("pokemonInput");
  console.log(pokemonInput.value);
  submitPokemon(pokemonChoice.value);
}

document.getElementById("pokemonForm").addEventListener("submit", formSubmit);
