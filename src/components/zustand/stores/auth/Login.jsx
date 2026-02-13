import { useState } from "react";
import { useAuthStore } from "./AuthStore";
import { useNavigate } from "react-router-dom";

function Login() {
  const login = useAuthStore((state) => state.login);
  const loading = useAuthStore((state) => state.loading);
  const error = useAuthStore((state) => state.error);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("employee");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await login(name, email,role);

    if (success) {
      navigate("/dashboard");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="admin">Admin</option>
        <option value="employee">Employee</option>
        <option value="hr">HR</option>
      </select>

      <button type="submit" disabled={loading}>
        {loading ? "Loading..." : "Login"}
      </button>

      {error && <p>{error}</p>}
    </form>
  );
}

export default Login;
