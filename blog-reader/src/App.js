import { useState } from "react";
import Post from "./Post";
import "./App.css";

const BASE_URL = "https://dummyjson.com/post";

function App() {
  const [postId, setPostId] = useState(null);
  const [posts, setPosts] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(`${BASE_URL}/${postId}`);
    if (!response.ok) {
      console.error("Failed to fetch post");
      return;
    }
    const post = await response.json();
    setPosts(posts => [...posts, post]);
  };

  const updatePost = async (originalId, newId) => {
    const response = await fetch(`${BASE_URL}/${newId}`);

    if (!response.ok) {
      console.error("Failed to fetch post");
      return;
    }
    const newPost = await response.json();
    setPosts(posts => posts.map((post) => post.id === originalId ? newPost : post))
  };

  console.log('rendered App.js');
  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="postId">
          Post ID to fetch: &nbsp;
          <input
            id="postId"
            type="number"
            min={1}
            placeholder="Post ID"
            onChange={(event) => setPostId(Number(event.target.value))}
            required
          />
        </label>
        <button type="submit">Fetch</button>
      </form>
      <div className="container">
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
            updatePost={updatePost}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
