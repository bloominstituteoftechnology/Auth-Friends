import React, { Component } from 'react';
import './App.css';
import CreateFriendForm from './components/CreateFriendForm';
import Friends from './components/Friends';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Friends friends={this.friends} />
        <CreateFriendForm />
      </div>
    );
  }
}

export default App;