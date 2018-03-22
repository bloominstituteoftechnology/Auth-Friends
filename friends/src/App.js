import React, { Component } from "react";

import "./App.css";
import AddFriend from "./components/AddFriend";
import FriendsList from "./components/FriendsList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddFriend />
        <FriendsList />
      </div>
    );
  }
}

export default App;
