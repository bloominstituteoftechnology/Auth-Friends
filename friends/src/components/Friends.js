import React, { Component } from 'react';
import SelectedFriend from './SelectedFriend';
import { connect } from 'react-redux';
import { deleteFriend } from '../actions';
import UpdateForm from './UpdateForm';
import logo from './logo.svg';

class Friends extends Component {
    handleDeleteFriend = () => {
      const { id } = this.props.friendSelected;
      this.props.deleteFriend(id);
    };

render() {
    return (
      <div className="Friend-Container">
        <ul className="Friend-List">
          {this.props.friends.map(friend => {
            return (
              <li onClick={() => this.handleShowFriend(friend)} key={friend.id}>
                {friend.name}
              </li>
            );
          })}
        </ul>
        {this.props.deletingFriend ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    deletingFriend: state.friendReducer.deletingFriend,
    error: state.friendReducer.error,
  };
};

export default connect(mapStateToProps, { deleteFriend })(Friends);