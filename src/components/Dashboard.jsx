import { useNavigate } from "react-router-dom";
import { useAuthStore } from "./zustand/stores/auth/AuthStore";

function Dashboard() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const navigate = useNavigate();

  return (
    <div>
      <h1>Dashboard </h1>
      <div>
        {user?.role === "admin" && (
          <div>
            <h3>Admin Panel</h3>
            <p>Manage Users</p>
            <p>View Reports</p>
          </div>
        )}

        {user?.role === "employee" && (
          <div>
            <h3>Employee Panel</h3>
            <p>View Tasks</p>
          </div>
        )}

        {user?.role === "hr" && (
          <div>
            <h3>HR Panel</h3>
            <p>Manage Hiring</p>
          </div>
        )}

        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
