import React, { Component } from 'react';

import { getFriends } from './actions'
import './App.css';
import FriendListView from './views/FriendListView';

class App extends Component {
 

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <FriendListView friends={this.props.friends}/>
      </div>
    );
  }
}

export default App;
