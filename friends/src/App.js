import React, { Component } from 'react';
import './App.css';
import CreateFriend from './components/CreateFriend';
import Friends from './components/Friends';

class App extends Component {
  render() {
    return (
      <div className="box">
        <Friends friends={this.friends} />
        <p className="App-intro">
        <CreateFriend />
          Let's Watch this in Action!
        </p>
      </div>
    );
  }
}

export default App;