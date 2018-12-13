import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import SelectedFriend from './SelectedFriend';
import { connect } from 'react-redux';
import { deleteFriend, updateSingleFriend, toggleDisplayUpdate } from '../actions';
import UpdateFriendForm from './UpdateFriendForm';

class Friends extends Component {
  handleDeleteFriend = () => {
    const { id } = this.props.friendSelected;
    this.props.deleteFriend(id);
  };

  handleDisplayFriend = friend => {
    this.props.updateSingleFriend(friend);
  };

  toggleDisplayUpdate = () => {
    this.props.toggleDisplayUpdate();
  };
  render() {
    return (
      <div className="Friend-Container">
        <ul className="Friend-List">
          {this.props.friends.map(friend => {
            return (
              <li onClick={() => this.handleDisplayFriend(friend)} key={friend.id}>
                {friend.name}
              </li>
            );
          })}
        </ul>
        {Object.keys(this.props.friendSelected).length > 0 ? (
          <SelectedFriend
            handleDisplayFriend={this.handleDisplayFriend}
            toggleDisplayUpdate={this.toggleDisplayUpdate}
            handleDeleteFriend={this.handleDeleteFriend}
            selected={this.props.friendSelected}
          />
        ) : null}
        {this.props.displayUpdate ? (
          <UpdateFriendForm friend={this.props.friendSelected} />
        ) : null}
        {this.props.deletingFriend ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    deletingFriend: state.friendsReducer.deletingFriend,
    error: state.friendsReducer.error,
    displayUpdate: state.singleFriendReducer.displayUpdate,
    friendSelected: state.singleFriendReducer.friendSelected
  };
};

export default connect(mapStateToProps, {
  deleteFriend,
  updateSingleFriend,
  toggleDisplayUpdate
})(Friends);
