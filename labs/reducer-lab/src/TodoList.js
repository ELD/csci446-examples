import { useReducer } from 'react';
import AddTodoForm from "./AddTodoForm";

const TodoList = () => {
  const tasksReducer = (initialState, action) => {
    // TODO: Fill this in by keying off the different action types; you can use an if-else if-else chain, or a switch statement here
  };

  const [todos, dispatch] = useReducer(tasksReducer, []);

  return (
    <>
      {todos ? (
        <ul>
          {todos.map((todo) => (
            <li>{todo.description}</li>
          ))}
        </ul>
      ) : null}
      {/* TODO: Create a function in this component and pass it via the `handleSubmit` prop */}
      <AddTodoForm submitDispatch={} />
    </>
  );
};

export default TodoList;