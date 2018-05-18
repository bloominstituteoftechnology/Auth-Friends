import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import {Cards, AddNew} from './components';


class App extends Component {
  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Friends App : React-Redux-Thunk</h1>
        </header>
        <div>
          {/* {this.props} */}
        </div>
        <Cards />
        <AddNew />
      </div>
    );
  }
}

export default App;
 