import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAccount } from '../actions/friendsActions';

import FriendsList from '../views/FriendsList';

class App extends Component {
  componentDidMount() {
    this.props.getAccount();
  }

  logout = e => {
    e.preventDefault();

    localStorage.removeItem('token');
    this.props.history.push('/login');
  };

  render() {
    console.log('PROPS:', this.props);
    return (
      <>
        {this.props.fetching ? (
          <p>Loading Friends...</p>
        ) : (
          <FriendsList friends={this.props.friends} />
        )}
        <button type='button' onClick={this.logout}>
          Logout
        </button>
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    friends: state.friends,
    fetching: state.fetchingFriends,
    error: state.error
  };
};

const mapDispatchToProps = {
  getAccount
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
