import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { connect } from "react-redux";
import { fetchingFriends } from "../actions";

class App extends Component {

  componentDidMount() {
    this.props.fetchingFriends();
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

const mapStateToProps = state => {
  const { friendsReducer } = state
  return friendsReducer
}

export default connect(mapStateToProps, { fetchingFriends })(App);
