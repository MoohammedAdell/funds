import axios from "axios";
import { useEffect, useState } from "react";

function FetchingDataByUseeffect() {
  const [post, setPost] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(1);
  const [idButtonClick, setIdButtonClick] = useState(1);

  const handelClick = () => {
    setIdButtonClick(userId);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idButtonClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [idButtonClick]);

  return (
    <div>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button type="button" onClick={handelClick}>
        Fetch User Title
      </button>
      {loading ? <p>loading</p> : null}
      <h1>{post.title}</h1>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.id}: {post.title}
          </li>
        ))}
      </ul> */}
      {error ? <h3 style={{ color: "red" }}>{error}</h3> : null}
    </div>
  );
}

export default FetchingDataByUseeffect;
