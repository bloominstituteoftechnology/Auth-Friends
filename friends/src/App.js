import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from './actions/actions';

import FriendsList from './components/FriendsList';
import AddFriendForm from './components/AddFriendForm';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    if (this.props.fetching) {
      return <p>Fetching Data...</p>;
    } else {
      console.log(this.props.error);
      if (this.props.error) {
        return <p>{this.props.error}</p>;
      }
      return (
        <div>
          <AddFriendForm />
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
    friends: state.friends,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchFriends }
)(App);
