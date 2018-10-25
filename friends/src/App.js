import React, { Component } from 'react';
import './App.css';

import { FriendForm } from "./components";
import { FriendsView } from "./views";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendsView />
        <FriendForm />
      </div>
    );
  }
}

export default App;
