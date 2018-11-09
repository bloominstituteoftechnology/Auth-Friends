import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import { addFriendAction } from './actions/friendsActions';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Friends List:</h1>
        <ul className='friends-list'>

        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    fetchingFriends: state.fetchingFriends,
    friendsFetched: state.friendsFetched,
    savingFriends: state.savingFriends,
    friendsSaved: state.friendsSaved,
    updatingFriend: state.updatingFriend,
    friendUpdated: state.friendUpdated,
    deletingFriend: state.deletingFriend,
    friendDeleted: state.friendDeleted,
    friends: state.friends,
    error: state.error,
  }
}

export default connect(mapStateToProps, {addFriendAction})(App);
