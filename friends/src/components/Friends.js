import React, { Component } from 'react';
import { connect } from 'react-redux';
// import actions
import { fetchFriends,createFriends } from '../actions';

class FriendsList extends Component {
  componentDidMount() {
    this,props.fetchFriends();
  }

  render() {
    return (
      <div>
	{/*	{this.props.fetchFriends ? (
	    <p> loading...</p>
	) : (

	  <ul>
	{this.props.friends.map(friend => {
	  return <li key={friend.name}>{friend.name}</li>
	  
	    </ul>
	    })}
	  } */}
    </div>
  );
};

// This is not working at all right now. As mentioned in another component, I may end up ditching one or more of these separate components and just putting them all together as that makes more sense to me. But I didn't spend much time on this today so I'll keep trying for awhile longer.
