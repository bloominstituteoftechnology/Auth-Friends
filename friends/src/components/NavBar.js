import React from "react";
import { Link, useHistory } from "react-router-dom";

const NavBar = () => {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };
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
      <div onClick={logout}>Logout</div>
    </div>
  );
};

export default NavBar;
