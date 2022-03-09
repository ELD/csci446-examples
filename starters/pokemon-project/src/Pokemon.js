import Form from "./Form";

function Pokemon({ pokemon, updateFn }) {
  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img alt={pokemon.name} src={pokemon.sprites.front_default} />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          // updateFn(...);
        }}
      />
    </div>
  );
}

export default Pokemon;
