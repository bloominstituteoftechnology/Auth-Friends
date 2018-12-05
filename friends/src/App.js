import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import { fetchFriends } from './actions';
import FriendsList from './components/FriendsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return (
      <div className="App">
        <FriendsList friends={this.props.friends} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchFriends: () => dispatch(fetchFriends())
  }
}

function mapStateToProps(state) {
  return {
    friends: state.friends
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
