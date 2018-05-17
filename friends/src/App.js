import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import { fetchFriends } from './actions/index';
import Friends from './components/Friends';

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Friends />
      </div>
    );
  }
}




export default connect(null, { fetchFriends })(App);
