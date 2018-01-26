import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Friends from "./components/Friends";
import CreateFriendForm from "./components/CreateFriendForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Friends</h1>
        </header>
        <Friends />
      </div>
    );
  }
}

export default App;
