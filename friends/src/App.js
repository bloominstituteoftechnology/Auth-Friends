import React, { Component } from 'react';
import FriendsList from './container/FriendsList';
// import get action

class App extends Component {
  // componentDidMount(){

  // }
  render() {
    return (
      <div className="App">
        <FriendsList /* Some Props*/ />
      </div>
    );
  }
}

export default App;
