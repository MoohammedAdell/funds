import { useState } from "react";
import { useAuthStore } from "./AuthStore";
import { useNavigate } from "react-router-dom";

function Login() {
  const login = useAuthStore((state) => state.login);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  


  const handleSubmit = (e) => {
    e.preventDefault();

    login({
      name: username,
      email: email,
    });
    navigate("/")
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">Login</button>
      
    </form>
  );
}

export default Login;
