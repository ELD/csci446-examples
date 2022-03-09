import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleTodo() {
  const { todoId } = useParams();
  const [todo, setTodo] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then((response) => response.json())
      .then((todo) => setTodo(todo));
  }, [todoId]);

  return (
    <section>
      <h1>Todo #{todo.id}</h1>
      <p>Belongs to user #{todo.userId}</p>
      <p>{todo.description}</p>
      <p>
        Completed?{" "}
        <span className={todo.completed ? "text-green-500" : "text-red-500"}>
          {todo.completed ? "Yes" : "No"}
        </span>
      </p>
    </section>
  );
}

export default SingleTodo;
