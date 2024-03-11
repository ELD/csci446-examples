import { json, useLoaderData } from "react-router-dom";

async function loadProjects() {
  const response = await fetch(`http://localhost:3001/projects`);
  return await response.json();
}

export default function Listing2() {
  const list = useLoaderData();

  return (
    <>
      <h2>A list would be here...</h2>
      {list.map((item) => (
        <article key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </>
  );
}

export { loadProjects };

