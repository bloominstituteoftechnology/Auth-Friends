import React from "react";
import { BrowserRouter as Route, Link, Switch } from "react-router-dom";

import Login from "./login";
import Home from "./home";

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/"> Home</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Nav;
