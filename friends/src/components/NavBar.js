import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <h3>NavBar</h3>
      <Link to="/login">
        <div>Login</div>
      </Link>
    </div>
  );
};

export default NavBar;
