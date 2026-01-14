import { useState } from "react";
import Hello from "./components/Hello";

function App() {
  const [sub, setSub] = useState(true);
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="app">
      <h1>
        {sub ? "welcome visitor " : "thank you for login "}
        {count}
      </h1>
      <button onClick={() => setSub(!sub)}>
        {" "}
        <h3>{sub ? "login" : "signout"}</h3>
      </button>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={()=>{setCount(0)}}>reset</button>
    </div>
  );
}

export default App;
