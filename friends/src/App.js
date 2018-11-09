import React, { Component } from 'react';

import './App.css';
import FriendForm from './Components/FriendForm';
import FriendList from './Components/FriendList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendForm />
        <FriendList />
      </div>
    );
  }
}

export default App;
