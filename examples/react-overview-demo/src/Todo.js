import {useState} from 'react';

const Todo = () => {
  const [todo, setTodo] = useState({ todo: '', completed: false });
  const handleUpdate = (event) => {
    event.preventDefault();
    console.log(todo);
  };

  const fetchRandomTodo = () => {
    fetch(`https://dummyjson.com/todos/random`)
      .then((response) => response.json())
      .then((randomTodo) => {
        setTodo(randomTodo);
      });
  }

  return (
    <div>
      <button onClick={fetchRandomTodo}>Fetch Random Todo</button>
      <form onSubmit={handleUpdate}>
        <input type="text" value={todo.todo} onChange={(event) => setTodo({ ...todo, todo: event.target.value })} />
        <input type="checkbox" value={todo.completed} onChange={(event) => setTodo({ ...todo, completed: event.target.value })} />
        <button type="submit">Update Todo</button>
      </form>
    </div>
  );
};

export default Todo;
