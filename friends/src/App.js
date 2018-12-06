import React, { Component } from 'react';
import './App.css';
import FriendsList from './Components/FriendsList.js';
import FriendsView from './View/FriendsView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Whelp, let's get started.</p>
          {/* <FriendsList />  well, we are showing the friendslist in the view, so this is redundant*/} 
          <FriendsView />
        </header>
      </div>
    );
  }
}

export default App;
