import React, { Component } from 'react';
import FriendsContainer from './components/FriendsContainer';
import CreateFriendForm from './components/CreateFriendForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendsContainer />
        <CreateFriendForm />
      </div>
    );
  }
}

export default App;
