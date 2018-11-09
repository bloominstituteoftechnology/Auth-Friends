import React, { Component } from 'react';
import './App.css';

import Friendslist from './components/FriendsList';
import CreateFriendForm from './components/CreateFriendForm';
import UpdateFriendForm from './components/UpdateFriendForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <CreateFriendForm />
        <UpdateFriendForm />
        <Friendslist />

      </div>
    );
  }
}

export default App;
