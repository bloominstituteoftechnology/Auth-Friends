import React, { Component } from 'react';

import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendForm />
        <FriendsList />
      </div>
    );
  }
}

export default App;
