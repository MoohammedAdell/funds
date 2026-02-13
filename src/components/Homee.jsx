import { Link } from "react-router-dom";

function Homee() {
  return (
    <>
      <Link to="/products">go to products</Link>
      <div>
        <Link to="/dashboard">go to dashboard</Link>
      </div>
    </>
  );
}

export default Homee;
