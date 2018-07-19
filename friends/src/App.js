import React, { Component } from 'react';
import './App.css';
import CreateFriendForm from './Components/CreateFriendForm';
import Friends from './Components/Friends';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Check out all of my neat pals!</h1>
        <CreateFriendForm />
        <Friends />
      </div>
    );
  }
}

export default App;
