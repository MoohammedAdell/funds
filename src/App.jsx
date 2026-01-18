import axios from "axios";
import PostList from "./components/PostList";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  axios
    .get("https://jsonplaceholder.typicode.com/postss")
    .then((res) => {
      // const title = res.data.data.title;
      console.log(res.data);
      setPosts(res.data);
    })
    .catch((err) => {
      console.log(err);
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

export default App;
