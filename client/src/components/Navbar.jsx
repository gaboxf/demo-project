import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h1>REACT MYSQL!</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new">New Task</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
