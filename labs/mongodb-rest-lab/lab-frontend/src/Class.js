import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

function Class() {
  const { classId } = useParams();
  const [singleClass, setClass] = useState({});

  // Runs on page render or when classId changes, but that happens on re-render
  useEffect(() => {
    fetch(`http://localhost:8000/classes/${classId}`)
      .then((body) => body.json())
      .then((json) => setClass(() => json));
  }, [classId]);
  return (
    <>
      <h1>
        {singleClass.number} - {singleClass.name}
      </h1>
      <Link to="students">Roster</Link>
    </>
  );
}

export default Class;
