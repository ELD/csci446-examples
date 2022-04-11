import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Classes() {
  const [classes, setClasses] = useState([]);

  // Analogous to ComponentDidMount; runs on component's mount and first render; runs once
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
          <li key={classe._id}>
            <Link to={`/classes/${classe._id}`}>{classe.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Classes;
