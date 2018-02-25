import React, { Component } from "react";
import ListStyled from "../styledComponents/ListStyled";
import { deleteFriend } from '../actions/actions';
import { connect } from 'react-redux';

class FriendList extends Component {
  handleDeleteFriend = () => {
    
  }

  render() {
    return (
      <ListStyled>
        {this.props.friends.map(friend => {
          return <li>
            {friend.name} is {friend.age} years old, with the email:{" "}
            {friend.email} <span><button onClick={() => this.handleDeleteFriend}>Delete</button></span>
          </li>;
        })}
      </ListStyled>
    );
  }
}

const mapStateToProps = state => {
  return {
    deletingFriend: state.friendsReducer.deletingFriend,
    error: state.friendsReducer.error,
  }
}

export default connect(mapStateToProps, { deleteFriend })(FriendList);
