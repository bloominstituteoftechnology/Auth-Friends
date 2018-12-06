import React, { Component } from "react";

import "./App.css";
import FriendsList from "./components/FriendsList.js";
import AddFriend from "./components/AddFriend.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendsList />
        <AddFriend />
      </div>
    );
  }
}

export default App;
