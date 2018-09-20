import { Friend } from './Friend';
import React from 'react';


export const FriendsList = (props) => {
  return (
    <div className='friends-list'>
    <ul>
      {props.friends.map(friend => {
        return (
          <li key={friend.id}>
            <Friend friend={friend} id={friend.id}/>
          </li>
        )
      })}
    </ul>
  </div>
  ) 
}