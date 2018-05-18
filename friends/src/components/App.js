import React, { Component } from 'react';
import './App.css';

import Friends from './Friends';
import CreateFriend from './CreateFriend';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Friends List</h1>
        <CreateFriend />
        <Friends />
      </div>
    );
  }
}