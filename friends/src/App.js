import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import PrivateRoute from "./components/PrivateRoute";
import DataPage from "./components/FriendList";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <Link to="/protected">Data page</Link>
        </ul>

        <Route path="/login" component={LoginForm} />
        <PrivateRoute exact path="/protected" component={DataPage} />
        <h1> form and friends authentication </h1>
      </div>
    </Router>
  );
}

export default App;
