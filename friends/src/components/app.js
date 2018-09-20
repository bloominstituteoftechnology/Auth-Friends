import React, { Component } from 'react';
import logo from '../assets/logo.svg';

import FriendsContainer from '../containers/friendscontainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <FriendsContainer />
      </div>
    );
  }
}

export default App;
