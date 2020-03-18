import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, withRouter, Redirect, Link } from "react-router-dom";

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function App() {
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className="App">
      <Navbar bg="light justify-content-between">
        <Navbar.Brand>Friends</Navbar.Brand>
        {localStorage.getItem("token") ? (
          <Nav>
            <Navbar.Text>
              <Link to="/login" onClick={handleLogout}>
                Logout
              </Link>
            </Navbar.Text>
          </Nav>
        ) : (
          <div></div>
        )}
      </Navbar>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/dashboard" component={FriendsList} />
    </div>
  );
}

export default withRouter(App);
