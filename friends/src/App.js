import React, { Component } from 'react';
import Friends from './Components/Friends';
import NewFriendForm from './Components/NewFriendForm';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NewFriendForm />
        <Friends />
      </div>
    );
  }
}

export default App;
