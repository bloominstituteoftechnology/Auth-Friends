import React, { Component } from 'react';
import { connect } from 'react-redux';
import { friendsActions } from '../Store/Actions'

import Friend from '../Presentational/Friend'
import FreindsForm from '../Presentational/FriendsForm';

class FriendsList extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.friends.map(friend => (
            <Friend key={friend.id} friend={friend}/>
          ))}
        </div>
        <FreindsForm />
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    friends: state.friends
  }
}

export default connect(mapStateToProps, { friendsActions })(FriendsList);