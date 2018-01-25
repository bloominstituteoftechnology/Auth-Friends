import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import SelectedFriend from './SelectedFriend';
import { connect } from 'react-redux';
import { deleteFriend } from '../actions';
import UpdateFriendForm from './UpdateFriendForm';

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendSelected: {},
      friendId: null,
      showUpdate: false
    };
  }

  handleDeleteFriend = () => {
    const { friendSelected } = this.state;
    this.props.deleteFriend(friendSelected.id);
    this.setState({ friendSelected: {} });
  };

  render() {
    return (
      <div className="Friend-Container">
        <ul className="Friend-List">
          {this.props.friends.map(friend => {
            return [
              <li
                onClick={() => this.setState({ friendSelected: friend })}
                key={friend.id}
              >
                {friend.name}
              </li>,
              <button
                onClick={_ =>
                  this.setState({
                    friendId: friend.id,
                    showUpdate: !this.state.showUpdate
                  })
                }
              >
                {' '}
                Update {friend.name}
              </button>
            ];
          })}
        </ul>
        {Object.keys(this.state.friendSelected).length > 0 ? (
          <SelectedFriend
            handleDeleteFriend={this.handleDeleteFriend}
            selected={this.state.friendSelected}
          />
        ) : null}
        {this.props.deletingFriend ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : null}
        {this.state.showUpdate ? <UpdateFriendForm /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    deletingFriend: state.friendsReducer.deletingFriend,
    error: state.friendsReducer.error
  };
};

export default connect(mapStateToProps, { deleteFriend })(Friends);
