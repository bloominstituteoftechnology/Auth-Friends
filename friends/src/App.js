import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getFriends } from './actions';
import Friends from './components/Friends.js';

class App extends Component {
  
  state = {
    name: '',
    age: '',
    email: ''
  }

  componentDidMount() {
    this.props.getFriends();
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

const mapStatetoProps = (state) => {
  console.log(state);
  return {
    friends: state.friends,
    
    friendsFetched: state.friendsFetched,

    error: state.error
  }
}

const actions = {
  getFriends
}

export default connect(mapStatetoProps, actions)(App);
