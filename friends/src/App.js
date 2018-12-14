import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { FriendListView } from './views';
import  FriendForm  from './components/FriendForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendListView />
        <FriendForm />
      </div>
    );
  }
}

export default App;
