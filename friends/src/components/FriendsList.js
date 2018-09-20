import React from 'react';
import Friend from './Friend';

const FriendsList = (props) => {
  return (
    <div>
      <h1>Here be your friends:</h1>
      {props.friends.map((friend) => {
        return <Friend friend={friend} key={friend.id} />;
      })}
    </div>
  );
};
export default FriendsList;