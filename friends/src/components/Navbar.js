import { Link } from "react-router-dom";
import React from "react";

export const Navbar = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/logout">Logout</Link>
      <Link to="/friendslist">Friends List</Link>
    </div>
  );
};
