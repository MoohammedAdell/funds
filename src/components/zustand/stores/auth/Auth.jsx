import { Link } from "react-router-dom";
import { useAuthStore } from "./AuthStore";

function Auth() {
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logout = useAuthStore((state) => state.logout);

  return (
    <>
      {isAuthenticated ? (
        <>
          <h3>Welcome {user.name}</h3>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <Link to="/login" style={{ textDecoration: "none" }}>
          Login
        </Link>
        
      )}
    </>
  );
}

export default Auth;
