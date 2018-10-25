import React, { Component } from 'react';

import { connect } from 'react-redux';
import './App.css';

import CreateFriendForm from './components/CreateFriendForm';
import Friends from './components/Friends';
import { fetchData } from './actions';


class App extends Component {

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className="App">
        <CreateFriendForm />
        <Friends friends={this.props.friends} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetchingFriends: state.friendsReducer.fetchingFriends,
    friendsFetched: state.friendsReducer.friendsFetched,
    friendsSaved: state.friendsReducer.friendsSaved,
    savingFriends: state.friendsReducer.savingFriends,
    updatingFriend: state.friendsReducer.updatingFriend,
    friendUpdated: state.friendsReducer.friendUpdated,
    deletingFriend: state.friendsReducer.deletingFriend,
    friendDeleted: state.friendsReducer.friendDeleted,
    friends: state.friendsReducer.friends,
    error: state.friendsReducer.error
  }
}

export default connect(mapStateToProps, {
  fetchData
})(App);
