import React, { Component } from 'react';
import './App.css';
import Friends from './components/Friends';
import CreateFriendForm from './components/CreateFriendForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Friends List</h1>
        <Friends />
        <CreateFriendForm />
      </div>
    );
  }
}

export default App;
