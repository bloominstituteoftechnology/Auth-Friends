import React from 'react';
import Friend from './Friend';

const FriendsList = (props) => {
  return (
    console.log(props.friends),
    (
      <div>
        <h1>Friend List</h1>
        {props.friends.map((friend) => {
          return <Friend friend={friend} key={friend.id} />;
        })}
      </div>
    )
  );
};

export default FriendsList;
