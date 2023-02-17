const Todo = ({ item, handleDelete, toggleTodo }) => {
  return (
    <div key={item.id}>
      <p>{item.description}</p>
      <input type="checkbox" value={item.completed} onChange={() => toggleTodo(item.id)} />
      <button onClick={() => handleDelete(item.id)}>Delete</button>
    </div>
  );
};

export default Todo;
