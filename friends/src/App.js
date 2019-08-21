import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import PrivateRoute from "./components/PrivateRoute";
import FriendList from "./components/FriendList";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <Link to="/protected">OMG Friends</Link>
        </ul>

        <Route path="/login" component={LoginForm} />
        <PrivateRoute exact path="/protected" component={FriendList} />
        <h1> form and friends authentication </h1>
      </div>
    </Router>
  );
}

export default App;
