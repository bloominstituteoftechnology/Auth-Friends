import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { connect } from 'react-redux';
// import { newFriend } from '../actions';
// import axios from 'axios';
// import CreateFriendForm from './components/CreateFriendForm';
import Friends from './components/Friends';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Friends />
      </div>
    );
  }
}

export default App;
