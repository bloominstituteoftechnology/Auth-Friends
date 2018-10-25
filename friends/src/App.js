import React, { Component } from 'react';
import './App.css';
import AddFriendForm from "./components/AddFriendForm";
import FriendsList from "./components/FriendsList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddFriendForm />
        <FriendsList />
      </div>
    );
  }
}

export default App;
