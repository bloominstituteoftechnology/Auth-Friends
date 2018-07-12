import React, { Component } from 'react';
import '../App.css';
import FriendsList from '../containers/FriendsList';
import { getFriends } from '../actions';

class App extends Component {

  componentDidMount(){
    getFriends('http://localhost:5000/api/friends');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Friends!</h1>
        </header>
        <FriendsList />
      </div>
    );
  }
}

export default App;
