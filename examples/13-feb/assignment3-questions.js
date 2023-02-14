const API_URL = 'https://pokeapi.co/api/v2/pokemon';
const root = document.getElementById('root');
const form = document.getElementById('addPokemonForm');

form.addEventListener('submit', (event) => {
  // Prevents the form from submitting and refreshing the page
  event.preventDefault();

  const pokemonName = document.getElementById('pokemonName').value;
  // const pokemonName = event.target[0].value;

  fetch(`${API_URL}/${pokemonName}`)
    .then((response) => response.json())
    .then((newPokemon) => {
      // create elements for the Pokemon Card
      const div = document.createElement('div');
      const image = document.createElement('img');
      image.src = newPokemon.sprites.front_default;
      div.appendChild(image);
      root.appendChild(div);

      // div.appendChild(pokemonNameLabel);
      // div.appendChild(pokemonAttack);
      // div.appendChild(pokemonHealth);

      const updateForm = document.createElement('form');
      // const input = ...;
      const button = document.createElement('button');
      button.type = 'submit';
      button.innerText = 'Update Pokemon';
      updateForm.appendChild(button);
      div.appendChild(updateForm);

      updateForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let updatedPokemonName = 'pikachu';
        fetch(`${API_URL}/${updatedPokemonName}`)
          .then((response) => response.json())
          .then((updatedPokemon) => {
            image.src = updatedPokemon.sprites.front_default;
            debugger;
          });
      });

      div.appendChild(form);
    });
});
