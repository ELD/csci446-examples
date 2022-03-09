class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonName: "",
      pokemon: [],
    };

    this.baseUrl = "https://pokeapi.co/api/v2/pokemon";

    // We need to bind `this`, more details here: https://reactjs.org/docs/faq-functions.html
    this.handleSubmit = this.handleSubmit.bind(this); // handleSubmit()
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch(`${this.baseUrl}/${this.state.pokemonName}`)
      .then((body) => body.json())
      .then((pokemon) => {
        console.log(pokemon);
        // We use the ES6 spread operator ("...") to spread the items already in state
        // and append the new Pokemon from the fetch request to the end of the array
        this.setState({ pokemon: [...this.state.pokemon, pokemon] });
      });

    // We null out the text input of the controlled component
    // If we didn't do this, the text input would still have the user input
    this.setState({ pokemonName: "" });
  }

  handleChange(event) {
    this.setState({ pokemonName: event.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.pokemonName}
            onChange={(event) => this.handleChange(event)} // onChange() -> handleChange(..) -> handleChange.call(window, ..)
            // onChange() -> handleChange(..) -> handleChange.call(instanceofApp, ...) -> access this.state or this.props
          />
          <button type="submit">Add Pokemon</button>
        </form>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {/* For each Pokemon in state, we'll render the corresponding card */}
          {/* The `key` prop/attribute helps React identify what's changed and what hasn't */}
          {this.state.pokemon.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
    );
  }
}

class PokemonCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pokemon-card">
        <h1>
          {this.props.pokemon.name} - {this.props.pokemon.id}
        </h1>
        <img
          src={this.props.pokemon.sprites.front_default}
          alt={`${this.props.pokemon.name}`}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
