import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
