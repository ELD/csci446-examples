import { useEffect, useState } from "react";
import Spinner from "./Spinner";

export default function Listing() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3001/projects`);
      const data = await response.json();

      await new Promise((resolve) => setTimeout(resolve, 3000));
      setList(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>A list would be here...</h2>
      {loading ? (
        <Spinner />
      ) : (
        list.map((item) => (
          <article key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))
      )}
    </>
  );
}
