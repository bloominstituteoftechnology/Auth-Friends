import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';

import { getFriends, postFriends } from '../actions/friendsActions';
import AddFriend from '../components/AddFriend';

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className="App">
        <AddFriend />
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.friends.map(friend => {
              return (
                <li key={friend.id}>
                  Name: {friend.name} - Age: {friend.age} - Email:{' '}
                  {friend.email}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    fetching: state.fetching,
    chars: state.chars,
    error: state.error
  };
};
export default connect(mapStateToProps, { getFriends, postFriends })(App);
