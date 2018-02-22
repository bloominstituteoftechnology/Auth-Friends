import React from 'react';

function Friends (props) {
  console.log('props.friends', props.friends.length);
  return (
    <ul>
      {props.friends.map((friend, index) => {
        return <div> 
          <li>Name: {friend.name}</li>
          <li>Age: {friend.age}</li>
          <li>Email: {friend.email}</li>
        </div>
      })}
    </ul>
  )
}

export default Friends;