import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';

import { getFriends, deleteFriends } from '../actions/friendsActions';
import AddFriend from '../components/AddFriend';
// import FriendsList from '../components/FriendsList';

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  deleteFriend = id => {
    // event.preventDefault();
    console.log('This friend is to be deleted.');
    this.props.deleteFriends({
      id: id
    });
  };

  render() {
    return (
      <div className="App">
        <div className="addFriendForm">
          <AddFriend />
        </div>
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.friends.map(friend => {
              return (
                <li key={friend.id}>
                  Name: {friend.name}
                  <br />
                  Age: {friend.age}
                  <br />
                  Email: {friend.email}
                  <br />
                  <button
                    className="deleteBtn"
                    onClick={() => this.deleteFriend(friend.id)}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
          // <FriendsList friends={this.props.friends} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    fetching: state.fetching,
    error: state.error
  };
};

const actions = {
  getFriends,
  deleteFriends
};

export default connect(mapStateToProps, actions)(App);
