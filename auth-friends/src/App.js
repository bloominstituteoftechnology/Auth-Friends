import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./auth/PrivateRoute";
import Friends from "./components/Friends";

function App() {
  return (
    <div className="App">
      <h1>Friends Apppp</h1>
      <PrivateRoute exact path="/" component={Friends} />
      <Route exact path="/login" component={Login} />
    </div>
  );
}

export default App;
