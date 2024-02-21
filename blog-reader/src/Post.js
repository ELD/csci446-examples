import { useRef } from "react";

export default function Post(props) {
  const { id, title, body, updatePost } = props;
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    updatePost(id, Number(inputRef.current.value));
  }

  console.log('rendered Post.js');
  return (
    <article>
      <h1>{title}</h1>
      <p>{body}</p>
      <form onSubmit={handleSubmit}>
        <label>Post ID:</label>
        <input type="number" defaultValue={id} min={1} ref={inputRef} />
        <button type="submit">Update Post</button>
      </form>
    </article>
  );
}

