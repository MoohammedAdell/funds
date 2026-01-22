import Contact from "./components/Contact";
import Faqs from "./components/Faqs";
import Home from "./components/Home";
import UseReducer from "./components/UseReducer";
import UseRef from "./components/UseRef";
import ReactRouter from "./components/ReactRouter";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <ReactRouter />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
