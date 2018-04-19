import React, { Component } from 'react';
import './App.css';
import { fetchFriends } from './actions/friendsActions.js';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();
    console.log(this.props);
  }

  displayFriends() {
    if(this.props.friendsFetched) {
      this.props.friends.map(friend => { 
        return <div key={friend.name}>{friend.name}</div>
      })
    }
  }

  render() {
    return (
      <div className="App">
        -Friends-
        {this.props.friends.map(friend => { 
          return <div key={friend.name}>{friend.name}</div>
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    fetchingFriends: state.fetchFriends,
    friendsFetched: state.friendsFetched,
    friendsSaved: state.friendsSaved,
    savingFriends: state.savingFriends,
    updatingFriend: state.updatingFriend,
    friendUpdated: state.friendUpdated,
    deletingFriend: state.deletingFriend,
    friendDeleted: state.friendDeleted,
    friends: state.friends,
    error: state.error
  };
}

export default connect(mapStateToProps, { fetchFriends })(App);
