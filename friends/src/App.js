import React, { Component } from 'react';
import './App.css';
import FriendsForm from './components/FriendsForm';
import FriendsList from './components/FriendsList'; 
import { connect } from 'react-redux'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome Friends</h1>
        </header>
          <FriendsForm /> 
          <FriendsList /> 
      </div>
    );
  }
}

export default connect(null)(App);
