let button = document.querySelector("#addPokemon");

button.addEventListener("click", function () {
  let body = document.body;

  let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((response) => {
      response.json();
    })
    .then((pokemon) => {
      let image_url = pokemon.sprites.front_default;
      let name = pokemon.name;
      let id = pokemon.id;

      let header = document.createElement("h1");
      header.textContent = `${name} - ${id}`;

      let image = document.createElement("img");
      image.setAttribute("src", image_url);
      image.setAttribute("alt", `front view of ${name}`);

      body.append(header);
      body.append(image);

      console.log(pokemon);
    });
});
