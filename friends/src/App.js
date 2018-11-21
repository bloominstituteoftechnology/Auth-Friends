import React, { Component } from 'react';
import './App.css';
import { handleFriends } from './actions/actions'
import FriendContainer from './components/FriendContainer';

class App extends Component {
 constructor(){
  super()
  this.state = {

   friends: []
  }
 }
componentDidMount(){
 handleFriends()
}
  render() {
    return (
      <div className="App">
      <FriendContainer />
      </div>
    );
  }
}

export default App;
