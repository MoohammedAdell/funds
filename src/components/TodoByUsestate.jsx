import { useState } from "react";

function TodoByUsestate() {
  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");

  const addItem = () => {
    setItems([...items, value]);
    setValue("");
  };
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button onClick={addItem}>add Item</button>
      <ul>
        {items.map((item) => (
          <div>
            <li>{item}</li>
            <button>delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TodoByUsestate;
