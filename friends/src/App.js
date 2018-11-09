import React, { Component } from 'react';
import Friends from './Components/Friends';
import NewFriendForm from './Components/NewFriendForm';

import styles from './css/App.css';

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
