import React, { Component } from 'react';
import FriendList from "./components/FriendList";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">              
        <h1>I hope I have friends I can add to this App</h1>
        <FriendList />
      </div>
    );
  }
}

export default App;
