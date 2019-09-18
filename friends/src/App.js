import React from 'react';
import Login from "./components/Login";
import Friends from "./components/Friends";
import './App.css';
import { Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <h1>Friends App</h1>
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/friends" component={Friends} />
    </div>
  );
}

export default App;