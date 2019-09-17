import React from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Friends from "./components/Friends";
import FriendForm from "./components/FriendForm";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login/">Login</Link>
            </li>
          </ul>
        </nav>

        <Route path="/login/" component={Login} />
        <Route path="/" exact component={Home} />
        <PrivateRoute exact path="/friends" component={Friends} />
        <PrivateRoute exact path="/friendForm" component={FriendForm} />
      </div>
    </Router>
  );
}

export default App;
