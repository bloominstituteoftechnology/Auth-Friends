import React from 'react';

export default function FriendList(props) {
  return (
    <div>
      <ul>
        {props.friends.map(friend => {
          return (
            <li>{friend.name}</li>
          )
        })}
      </ul>
    </div>
  )
}
