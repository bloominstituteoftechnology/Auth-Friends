import React, { Component } from 'react';
import './App.css';
import FriendList from './Components/FriendList';
import AddFriendForm from './Components/AddFriendForm';
import UpdateFriendForm from './Components/UpdateFriendForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddFriendForm />
        <FriendList />
        <UpdateFriendForm />
      </div>
    );
  }
}

export default App;
