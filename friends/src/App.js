import React, { Component } from "react";
import "./App.css";
import { FriendView } from "./Views/";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendView />
      </div>
    );
  }
}

export default App;
