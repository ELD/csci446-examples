import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [userId, setUserId] = useState(-1);
  const [user, setUser] = useState(null);
  const [userTodos, setUserTodos] = useState([]);

  throw new Error('fake error to find in the smoke test');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`https://dummyjson.com/users/${userId}`);
    const json = await response.json();

    setUser(json);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://dummyjson.com/users/${userId}/todos`);
      const json = await response.json();
      setUserTodos(json.todos);
    };

    if (userId <= 0) return;
    fetchData();
  });

  return (
    <>
      <h1>Users and their todos</h1>
      <form onSubmit={handleSubmit} aria-label="userId form">
        <label>
          User ID:
          <input aria-label="userId input" type="number" value={userId} onChange={(e) => setUserId(e.target.value)} />
          <button type="submit">Get User's Todos</button>
        </label>
      </form>
      <h2>User:</h2>
      {user ? (
        <div>
          <h3>
            {user.firstName} {user.lastName}
          </h3>
          <p>Birth date: {user.birthDate}</p>
          <p>University: {user.university}</p>

          <h4>Todos:</h4>
          {userTodos ? (
            <ul>
              {userTodos.map((userTodo) => (
                <li key={userTodo.id}>{userTodo.todo}</li>
              ))}
            </ul>
          ) : (
            <p>No user todos loaded</p>
          )}
        </div>
      ) : (
        <p>No user loaded</p>
      )}
    </>
  );
}

export default App;
