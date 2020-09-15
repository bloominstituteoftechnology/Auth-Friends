import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from "antd";
function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <Link to="/login">
          <Button type="primary">Login</Button>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
