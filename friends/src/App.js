import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getFriends } from './actions';

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className="Friends">
        {this.props.fetchFriends ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.friends.map(friend => {
              return <li key={friend.name}>{friend.name}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps= (state) => {
  console.log(state);
  return {
    friends: state.friendReducer.friends,
    fetchFriends: state.friendReducer.fetchFriends,
    error: state.friendReducer.error
  };
};

export default connect(mapStateToProps, { getFriends }) (App);
