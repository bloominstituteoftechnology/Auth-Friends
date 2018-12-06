import React, { Component } from 'react';
import { connect } from 'react-redux';

import FriendsListView from './views/FriendsListView';
import SubmitNewFriendView from './views/SubmitNewFriendView';

import { getFriends } from './store/actions';

class App extends Component {
  
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className="App">
        <SubmitNewFriendView />
        <FriendsListView />
      </div>
    );
  }
}

// export default App;

export default connect(null, { getFriends })(App);