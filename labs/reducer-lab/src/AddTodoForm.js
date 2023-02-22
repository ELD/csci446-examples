const AddTodoForm = ({ submitDispatch }) => {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleInputChange = (event) => {
    // TODO: Set the `todoText` state based on the event
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* TODO: Make these components controlled via the useState hook */}
      <input type="text" value={todoText} onChange={} />
      <button type="submit">Add Task</button>
    </form>
  )
};

export default AddTodoForm;
