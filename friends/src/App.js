import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getFriends, updateFriend, addFriend, deleteFriend, stageUpdate } from './actions';
import Friend from './components/friend';
import AddForm from './components/addForm';

class App extends Component {

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className="App">
      <AddForm addFriend={this.props.addFriend} />

      {this.props.fetchingFriends ? 
        <h1>Loading Friends...</h1> : null}
      {this.props.savingFriends ? 
        <h1>Adding Friend...</h1> : null}
      {this.props.updatingFriend ? 
        <h1>Updating Friend...</h1> : null}
      {this.props.deletingFriend ? 
        <h1>Deleting Friend...</h1> : null}

      {this.props.friends.map(friend => (
          <Friend 
            friend={friend} 
            stageUpdate={this.props.stageUpdate}
            updateStaged={this.props.updateStaged}
            updateFriend={this.props.updateFriend}
            deleteFriend={this.props.deleteFriend}
            friendToUpdate={this.props.friendToUpdate}
            />))}

      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    fetchingFriends: state.fetchingFriends,
    savingFriends: state.savingFriends,
    updatingFriend: state.updatingFriend,
    deletingFriend: state.deletingFriend,
    stageUpdate: state.stageUpdate,
    updateStaged: state.updateStaged,
    friends: state.friends,
    friendToUpdate: state.friendToUpdate,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  {
    getFriends,
    addFriend,
    updateFriend,
    deleteFriend,
    stageUpdate
  }
)(App);
