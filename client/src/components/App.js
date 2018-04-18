import React, { Component } from 'react';
import { FriendsList, FriendForm } from '.'

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
