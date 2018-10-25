import React, { Component } from 'react';
import './App.css';

import { FriendsWrapperView } from './views';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendsWrapperView />
      </div>
    );
  }
}

export default App;
