import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import FriendsForm from './components/FriendsForm';
import FriendsList from './components/FriendsList';
import { getFriends } from './actions';

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div>
        {this.props.fetchingFriends ? (
          <div>Loading friends...</div>
        ) : (
          <div>
            <FriendsForm />
            <FriendsList friends={this.props.friends}/>
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    friends: dispatch.friendsReducer.friends,
    fetchingFriends: dispatch.friendsReducer.fetchingFriends
  }
}

export default connect(mapDispatchToProps, { getFriends })(App);
