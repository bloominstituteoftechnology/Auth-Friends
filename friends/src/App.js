import React, { Component } from 'react';
import { connect } from 'react-redux';

import FriendsList from './components/FriendsList';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendsList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    fetchingData: state.friendsReducer.fetchingData,
    friends: state.friendsReducer.friends,
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);
