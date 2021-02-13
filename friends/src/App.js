import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
