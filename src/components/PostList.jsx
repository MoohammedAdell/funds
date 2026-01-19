import axios from "axios";
import { useState } from "react";
function PostList() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      setPosts(res.data);
    })
    .catch((err) => {
      setError(err.message);
    });
  return (
    <div className="app">
      {posts.length
        ? posts.map((post) => (
            <h1 key={post.id}>
              <span>{post.id}: </span> {post.title}
            </h1>
          ))
        : null}
      {error ? <h3 style={{ color: "red" }}>{error}</h3> : null}
    </div>
  );
}

export default PostList;
