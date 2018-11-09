import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from './actions/actions';

import FriendsList from './components/FriendsList';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    if (this.props.fetching) {
      return <p>Fetching Data...</p>;
    } else {
      return (
        <div>
          <FriendsList friends={this.props.friends} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    fetching: state.fetching,
    friends: state.friends
  };
};

export default connect(
  mapStateToProps,
  { fetchFriends }
)(App);
