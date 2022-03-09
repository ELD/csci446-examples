import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Todo from "./components/Todo";
import NoTodos from "./components/NoTodos";
import App from "./App";

function Todos() {
  const [userId, setUserId] = useState(1);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/?userId=${userId}`)
      .then((body) => body.json())
      .then((json) => {
        setTodos(json);
      });
  }, [userId]);

  return (
    <App>
      <section className="m-4">
        <h1 className="text-4xl">
          Todos for User ID{" "}
          <input
            className="border-2"
            type="number"
            value={userId}
            onChange={(event) => setUserId(event.target.value)}
          />
        </h1>
        {todos.length > 0 ? (
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                <Todo title={todo.title} completed={todo.completed} />
              </li>
            ))}
          </ul>
        ) : (
          <NoTodos userId={userId} />
        )}
      </section>
      <Outlet />
    </App>
  );
}

export default Todos;
