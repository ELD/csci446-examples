import { useState } from "react";
import AddForm from './AddForm';

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const appendTodos = ({ description }) => {
    setTodos([...todos, { description }])
  }

  return (
    <>
      <AddForm handleSubmit={appendTodos} />
      {todos ? (
        <ul>
          {todos.map((todo) => {
            return <li>{todo.description}</li>;
          })}
        </ul>
      ) : null}
    </>
  );
};

export default Todos;
