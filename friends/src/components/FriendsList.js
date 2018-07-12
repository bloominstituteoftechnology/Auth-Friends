import React, { Component } from 'react'
import { connect } from 'react-redux';
import {getFriends, getFetchState } from '../reducers/reducerIndex';
import * as actions from '../actions/actions';
import Friend from './Friend';

 class FriendsList extends Component {
   constructor(props) {
     super(props);
   }
  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    const friends = this.props.friends.map( friend => <Friend friend={friend} key={friend.id} /> );
    return (
      <div>
        {friends}
      </div>
    )
  }
}

const mapStateToProps = state => (
  {
  friends: getFriends(state),
  fetchState: getFetchState(state),
  }
);

export default connect(mapStateToProps, actions)(FriendsList);