import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Friends from './Components/Friends';
import CreateFriendForm from './Components/CreateFriendForm';
import UpdateFriendForm from './Components/UpdateFriendForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Friends />
        <CreateFriendForm />
        <UpdateFriendForm />
      </div>
    );
  }
}

export default App;
