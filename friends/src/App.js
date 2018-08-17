import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendList from './components/friendlist'

class App extends Component {
  render() {
    return (
      <div>
         <FriendList />
      </div>
    );
  }
}

export default App;
