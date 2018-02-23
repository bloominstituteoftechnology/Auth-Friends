import React, { Component } from 'react';
import { connect } from 'react-redux';
import {updateOneFriend} from '../actions';

class Friends extends Component {

  deleteFriend = () => {
    const { id } = this.props.friendSelected;
    this.props.deleteFriend(id);
  };

  showFriend = friend => {
    this.props.updateOneFriend(friend);
  };

  toggleShowUpdate = () => {
    this.props.toggleShowUpdate();
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.friends.map(friend => {
            return (
              <li key={friend.id} onClick={() => this.showFriend(friend)}>
                {friend.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.friendsReducer.error,
  };
};

export default connect(mapStateToProps, {updateOneFriend})(Friends);
