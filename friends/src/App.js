import React, { Component } from 'react';
import './App.css';
import  {connect}  from 'react-redux';
import  fetchFriends  from './actions/actions'


class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return (
      <div className="App">
        <ul>
        {console.log(this.props)}
            {this.props.friends.map((friend, index) => {
              return <li key={index}>{friend.name}</li>;
            })}
          </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingFriends: state.fetchingFriends,
    friendsFetched: state.friendsFetched,
    friendsSaved: state.friendsSaved,
    savingFriends: state.savingFriends,
    updatingFriend: state.updatingFriend,
    friendUpdated: state.friendUpdated,
    deletingFriend: state.deletingFriend,
    friendDeleted: state.friendDeleted,
    error: state.error,
    friends: state.friends
  }
}

export default connect(
  mapStateToProps,
  {
    fetchFriends
  }
)(App);