import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FriendList from './components/friendlist'
import { connect } from 'react-redux';
import { getFriends } from './actions';

class App extends Component {
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div>
         <FriendList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {friends, fetchingFriends, friendsFetched, error } = state
  return {
      friends: friends,
      fetchingFriends: fetchingFriends,
      friendsFetched: friendsFetched,
      error: error
  };
};

export default connect(mapStateToProps, { getFriends })(App);
