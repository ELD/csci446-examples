import { useEffect, useState } from "react";

export default function Listing() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3001/projects`);
      const data = await response.json();

      console.log(data);
      setList(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>A list would be here...</h2>
      {list.map((item) => (
        <article>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </>
  );
}
