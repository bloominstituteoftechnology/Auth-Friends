
import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import { fetchFriends } from './actions'
import { addNewFriend } from "./actions";
import Friends from './components/Friends'
import FriendForm from "./components/FriendForm";

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return (
      <div className="App">
        {this.props.fetchingFriends ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <div>
            <Friends {...this.props}/>
            <FriendForm {...this.state} />
          </div>
          )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { 
    friends: state.friends,
    fetchingFriends: state.fetchingFriends,
    friendAdded: state.friendAdded,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  {
    /* actions go here */
    fetchFriends,
    addNewFriend
  }
)(App);
