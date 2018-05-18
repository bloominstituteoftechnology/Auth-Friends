import React, { Component } from 'react';
import './App.css';

import Friends from './Friends';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Friends List</h1>
        <Friends />
      </div>
    );
  }
}