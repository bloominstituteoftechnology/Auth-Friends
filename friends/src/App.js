import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getFriends, createFriend, updateFriend, deleteFriend } from './actions/actions';

class App extends Component {

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className="App">
        <Friends friends={this.state.friends} />
        <CreateFriendForm />
        <UpdateFriendForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    fetching: state.fetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getFriends, createFriend, updateFriend, deleteFriend })(App);
