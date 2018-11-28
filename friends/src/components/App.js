import React, { Component } from 'react';

import './App.css';
import FriendList from '../components/Friends'
import FriendForm from '../components/FriendForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendList />
        <FriendForm />
      </div>
    );
  }
}

export default App;
