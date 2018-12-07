import React, { Component } from 'react';

import FriendsListView from './views/FriendsListView';
import SubmitNewFriendView from './views/SubmitNewFriendView';

class App extends Component {


  render() {
    return (
      <div className="App">
        <SubmitNewFriendView />
        <FriendsListView />
      </div>
    );
  }
}

export default App;