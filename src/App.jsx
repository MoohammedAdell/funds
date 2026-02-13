import Count from "./components/zustand/stores/count/Count";
import Toggle from "./components/zustand/stores/toggle/Toggle";
import Mood from "./components/zustand/stores/Mood/Mood";
import Cart from "./components/zustand/stores/cart/Cart";
import Auth from "./components/zustand/stores/auth/Auth";
import { Link, Route, Routes } from "react-router-dom";
import Login from "./components/zustand/stores/auth/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/zustand/stores/auth/ProtectedRoute";
import Products from "./components/zustand/stores/cart/Products";
import Homee from "./components/Homee";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homee />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Auth />
      {/* <Count />
      <Toggle />
      <Mood /> */}

     
    </>
  );
}

export default App;
