import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  console.log(name);
  console.log(age);
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Form;
