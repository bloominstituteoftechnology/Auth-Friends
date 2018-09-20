import { Friend } from './Friend';
import React from 'react';


export const FriendsList = (props) => {
  <div className='friends-list'>
    <ul>
      {props.friends.map(friend => {
        return (
          <li key={friend.id}>
            <Friend friend={friend}/>
          </li>
        )
      })}
    </ul>
  </div>
}