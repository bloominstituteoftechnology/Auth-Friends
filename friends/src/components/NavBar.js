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
      <Link to="/dashboard">
        <div>Dashboard</div>
      </Link>
    </div>
  );
};

export default NavBar;
