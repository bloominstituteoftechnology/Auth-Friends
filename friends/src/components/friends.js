import React, { Component } from 'react';

const Friends = (props) => {
  return (
    <ul>
      {props.friends.maps((friend) => {
        <li>Name: {friend.name}</li>
        <li>Age: {friend.age}</li>
        <li>Email: {friend.email}</li>
      })}
    </ul>
  )
}

export default Friends;