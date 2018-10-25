import React, { Component } from 'react';
import './App.css';
import {FriendsListContainer}  from './containers'
import {FriendsFormContainer} from './containers'

class App extends Component {
  render() {
    return (
      <div className="App">
      <FriendsFormContainer />
      <FriendsListContainer />
      </div>
    );
  }
}

export default App;
