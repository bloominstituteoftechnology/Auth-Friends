import React from "react";
import "./index.css";

import { Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./utils/PrivateRoute";
import FriendPage from "./components/FriendPage";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="friend-page">
          <button>Friend Page</button>
        </Link>
      </nav>
      <Switch>
        <PrivateRoute exact path="/friend-page" component={FriendPage} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
