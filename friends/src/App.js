import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Friends List</h1>
          <div>
            <Link to="/" className="nav-links">
              Home
            </Link>
            <Link to="/login" className="nav-links">
              Login
            </Link>
          </div>
        </header>

        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          {/* <PrivateRoute path="/friends" component={FriendsList} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
