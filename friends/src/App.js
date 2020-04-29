import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import Register from "./components/Register";
import { NavLink, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/" component={Register} />
    </div>
  );
}

export default App;
