import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Friends List</h1>
          <div>
            <Link to="/login" className="nav-links">
              Login
            </Link>
            <Link to="/friends" className="nav-links">
              Friends
            </Link>
          </div>
        </header>

        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/friends" component={FriendsList} />
          <PrivateRoute path="/friends/add" component={AddFriend} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
