import React, { Component } from 'react';
import FriendsList from './FriendsList';
import AddFriendForm from './AddFriendForm';
import '../styles/App.css';

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
