import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    case "reset":
      return initialState;
    default:
      state;
  }
};

function UseReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={() => dispatch("inc")}>inc</button>
      <button onClick={() => dispatch("dec")}>dec</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
}

export default UseReducer;
