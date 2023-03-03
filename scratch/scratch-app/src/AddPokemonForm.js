const AddPokemonForm = ({ handleSubmit }) => {
  const [newPokemonName, setNewName] = useState('');
  return (
    <form onSubmit={(e) => {
        e.preventDefault(); handleSubmit(newPokemonName);
      }}>
      <input type="text" value={newPokemonName} onChange={(e) => setNewName(e.target.value)} />
      <button type="submit">Add Pokemon</button>
    </form>
  );
}
