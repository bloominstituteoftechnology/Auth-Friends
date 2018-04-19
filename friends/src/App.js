import React, { Component } from 'react';
import './App.css';
import { fetchFriends } from './actions/friendsActions.js';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        Time to build  friends app
        {this.props.friends.map(friend => {
          
          return <div>{friend.name}</div>
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: null
  };
}

export default connect(mapStateToProps, { fetchFriends })(App);
