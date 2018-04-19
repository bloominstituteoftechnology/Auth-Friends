import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {fetch_Friends} from './Actions';


class App extends Component {
  componentDidMount() {
    // call our action
    this.props.fetch_Friends()
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
  console.log(state)
  return {
    fetching: state.fetching,
    fetched: state.fetched,
    friends: state.friends
  }
}
export default connect(mapStateToProps, {
  /* actions go here */
  fetch_Friends
})(App);
