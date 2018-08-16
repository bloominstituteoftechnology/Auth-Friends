import React, { Component } from 'react';
import FriendsContainer from './containers/FriendsContainer'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendsContainer />
      </div>
    );
  }
}

export default App;