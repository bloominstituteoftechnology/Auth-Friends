import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <Link to="/login">Login</Link>
      <Link to="/friends">Friends</Link>
    </>
  );
};

export default Navigation;
