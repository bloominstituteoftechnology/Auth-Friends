import React, { Component } from 'react';
import FriendForm from './Components/FriendForm';
import FriendList from './Components/FriendList';
import './App.css';

class App extends Component {
  render() {
    return(
      <div className='App'>
        <FriendForm />
        <FriendList />
      </div>
    )
  }
}

export default App;