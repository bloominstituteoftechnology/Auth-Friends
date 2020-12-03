import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/login">
        <div>Login</div>
      </Link>
      <Link to="/friends">
        <div>Friends</div>
      </Link>
      <Link to="/other">
        <div>Other protected</div>
      </Link>
    </div>
  );
};

export default NavBar;
