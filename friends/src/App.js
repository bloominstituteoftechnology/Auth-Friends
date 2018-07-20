import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchingAll, addFriend } from './action';
import logo from './logo.svg';
import FriendForm from './FriendForm';

class App extends Component {
  componentDidMount() {
    this.props.fetchingAll();
  }
  render() {
    return (
      <div className="App">
        {this.props.fetchingFriends ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <div>{this.props.friends.map((friend) => <div key={friend.id}>{friend.name}</div>)}</div>
        )}
        <FriendForm addFriend={this.props.addFriend} />
      </div>
    );
  }
}
// must display friend.name b/c friend is an object

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    fetchingFriends: state.fetchingFriends,
    friendsFetched: state.friendsFetched,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchingAll, addFriend }
)(App);
