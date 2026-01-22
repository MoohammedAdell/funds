import { Link, NavLink } from "react-router-dom";

function ReactRouter() {
  return (
    <div className="wrapper">
      <div className="header">
        <h1>learn code </h1>
        <ul>
          <li>
            
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/faqs">faqs</NavLink>
          </li>
          <li>
            <NavLink to="/contact">contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ReactRouter;
