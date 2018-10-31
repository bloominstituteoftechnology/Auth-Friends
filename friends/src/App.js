import React, { Component } from "react";
import { FriendListView } from "./views";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Kat's Friends</h1>
        <FriendListView />
      </div>
    )
  }
}

export default App;
