import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { Add_todo } from './ActionCall';

class App extends Component {
  constructor() {
    super();
    this.state = {
        fetchingFriends: false,
        friendsFetched: false,
        friendsSaved: false,
        savingFriends: false,
        updatingFriend: false,
        friendUpdated: false,
        deletingFriend: false,
        friendDeleted: false,
        friends: [],
        error: null
    }
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
      </div>
    );
  }
}


const mapStateToProps = (props) => {
  return {
      friends: props
  };
};

export default connect(mapStateToProps, { Add_todo })(App);

