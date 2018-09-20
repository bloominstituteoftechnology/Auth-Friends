import React, { Component } from 'react';
import {connect} from 'react-redux';

import Friends from './components/Friends';
import FriendForm from './components/FriendForm';
import {getFriends} from './actions';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Friends List</h1>
        </header>
        
      </div>
    );
  }
}

export default App;