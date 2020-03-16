import React from "react";
import { withRouter, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
function App() {
  return (
    <div className="App">
    <Navbar bg="light justify-content-between">
      <Nav>
        <Navbar.Text>
          <Link to="/login">Login</Link>
        </Navbar.Text>
      </Nav>
      </Navbar>
      <Route path="/login" component={Login} />
      <FriendsList />
    </div>
  );
}

export default withRouter(App);
// withRouter is re-rendered on props changes
