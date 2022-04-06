import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/classes`)
      .then((body) => body.json())
      .then((json) => setClasses(() => [...json]));
  }, []);

  return (
    <>
      <h1>Classes</h1>
      <ul>
        {classes.map((classe) => (
          <li>{classe.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
