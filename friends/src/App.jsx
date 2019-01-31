import React, { Component } from "react";
import FriendsForm from "./components/FriendsForm";
import FriendsList from "./components/FriendsList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <FriendsList />
        <FriendsForm />
      </div>
    );
  }
}

export default App;
