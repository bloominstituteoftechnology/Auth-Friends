import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchFriends } from './actions/fetchingActions';
import FriendList from './components/FriendList';
import NewFriendForm from './components/NewFriendForm';

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return (
      <div className="app-wrapper">
        <NewFriendForm />
        <FriendList friends={this.props.friends} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  //console.log('app state: ', state);
  return {
    friends: state.friends,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  { fetchFriends }
)(App);
