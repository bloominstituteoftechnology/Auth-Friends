import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends, saveFriend, updateFriend, deleteFriend } from '../actions';
import './App.css';
import FriendForm from './FriendForm';

class App extends Component {
  componentDidMount(){
    this.props.fetchFriends();
  }

  render() {
    return (
      <div className="App">
        {this.props.editingFriend ? <FriendForm editing={true} {...this.props.friend} /> : <FriendForm />}
        {this.props.isFetching ? (
          <h1>Loading Friends...</h1>
        ) : (
          <ul>
            {this.props.friends.map(friend => {
              return <li key={friend.id}>{friend.name}</li>
            })}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends,
    isFetching: state.friendsReducer.isFetchingFriends,
    editingFriend: state.friendReducer.hasLoadedFriend,
    friend: state.friendReducer.friend
  }
}

export default connect(mapStateToProps, { fetchFriends, saveFriend, updateFriend, deleteFriend })(App);
