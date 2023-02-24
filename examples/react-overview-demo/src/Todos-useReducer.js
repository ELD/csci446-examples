import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Todo from './Todo';
import AddForm from './AddForm';

const Todos_useReducer = () => {
  const SERVER_URL = 'https://enwmegk8vlzxk.x.pipedream.net';

  const todosReducer = (todos, action) => {
    switch (action.type) {
      case "CREATE":
        return [...todos, { ...action.payload, id: uuidv4() }];
      case "TOGGLE":
        return todos.map((t) => t.id === action.id ? {...t, completed: !t.completed } : t);
      case "DELETE":
        return todos.filter((t) => t.id !== action.id);
      default:
        throw Error('Unknown action: ' + action.type);
    }
  }

  const [todos, dispatch] = useReducer(todosReducer, []);

  const syncTodos = () => {
    fetch(SERVER_URL, {
      method: 'POST',
      body: JSON.stringify(todos),
    })
      .then((response) => {})
      .catch(err => console.log(err));
  }

  const handleDeleteButton = (id) => {
    dispatch({ type: 'DELETE', id });
  };

  const handleToggle = (id) => {
    dispatch({ type: 'TOGGLE', id });
  }

  const addTodo = ({ description, completed }) => {
    dispatch({ type: 'CREATE', payload: { description, completed }}) // payload: { description: '...', completed: '...' }
  }

  return (
    <>
      <AddForm handleSubmit={addTodo} />
      {/* fn map([U], Fn(U) -> V) -> [V] */}
      {todos.map((todo) => {
        return <Todo key={todo.id} item={todo} handleDelete={handleDeleteButton} toggleTodo={handleToggle} />;
      })}
      <button onClick={syncTodos}>Sync Todos with Server</button>
    </>
  );
};

export default Todos_useReducer;
