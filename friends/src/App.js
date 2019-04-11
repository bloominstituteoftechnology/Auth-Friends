import React, { Component } from 'react';
import FriendList from './components/FriendList';
import AddFriendForm from './components/AddFriendForm';

class App extends Component {
  render() {
    return (
      <div>
        <AddFriendForm />
        <FriendList />
      </div>
    );
  }
}

export default App;