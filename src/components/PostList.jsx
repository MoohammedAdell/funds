function PostList({ list }) {
  return (
    <div>
      PostList
      {list.map((list) => {
        <h1>{list.title}</h1>;
      })}
    </div>
  );
}

export default PostList;
