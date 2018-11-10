import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import { addFriendAction, fetchingFriendsAction } from './actions/friendsActions';

class App extends React.Component {
  componentDidMount = (e) => {
    this.props.fetchingFriendsAction();
  }
  render() {
    return (
      <div className="App">
        <h1>Friends List:</h1>
        <div className='friends-list'>
          {this.props.friends.map((x) => {
            return (
              <div key={x.id} className='each-friend'>
                <p>{x.name}</p>
                <p>{x.age}</p>
                <p>{x.email}</p>
              </div>
            )
          })}
        </div>
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

export default connect(mapStateToProps, {addFriendAction, fetchingFriendsAction})(App);
