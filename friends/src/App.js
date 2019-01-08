import React, { Component } from 'react';
import { FriendsList, FriendsInput } from './components';
import { updateFriends, addFriend, deleteFriend } from './actions';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount(){
    this.props.updateFriends();
  }
  render() {
    return (
      <div className="App">
        <FriendsInput 
          addFriend={this.props.addFriend}
        />
        <FriendsList
          friends={this.props.friends}
          deleteFriend={this.props.deleteFriend}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    updating: state.updating,
    error: state.error,
  };
}

export default connect(
  mapStateToProps,
  {
    updateFriends,
    addFriend,
    deleteFriend,
  }
)(App);
