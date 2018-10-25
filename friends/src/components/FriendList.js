import React from 'react';
import Friend from './Friend';
import { Link } from 'react-router-dom';

const FriendList = props => {
  return (
    <div className='friend-list'>
    {props.friends.map(friend => {
      return (
        <Link key={friend.id} to={`/${friend.id}`}>
        <Friend key={friend.id} friend={friend} delete={props.deleteFriend}/>
        </Link>
      )
    })}
    </div>
  )
}

export default FriendList;
