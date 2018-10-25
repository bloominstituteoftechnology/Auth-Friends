import React, { Component } from "react";
import { FriendListView } from "./Views";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendListView />
      </div>
    );
  }
}

export default App;
