import { useState } from "react";
import Post from "./Post";
import './App.css';

function App() {
  const [postId, setPostId] = useState(null);
  const [posts, setPosts] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(`https://dummyjson.com/post/${postId}`);
    if (!response.ok) {
      console.error("Failed to fetch post");
      return;
    }
    const post = await response.json();
    setPosts([...posts, post]);
  };

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="postId">Post ID to fetch: &nbsp;
          <input id="postId" type="number" min={0} placeholder="Post ID" onChange={(event) => setPostId(Number(event.target.value))} required />
        </label>
        <button type="submit">Fetch</button>
      </form>
      <div>
        {posts.map((post) => <Post key={post.id} title={post.title} body={post.body} />)}
      </div>
    </div>
  );
}

export default App;
