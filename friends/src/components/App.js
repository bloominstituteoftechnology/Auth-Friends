import React, { Component } from 'react';

import FriendListContainer from './FriendListContainer';

 class App extends Component {
  
  render() {
    return (
      <div className="App">
      <h2>My Friends List:</h2>
        <FriendListContainer />
      </div>
    );
  }
}

export default App;