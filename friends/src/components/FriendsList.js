import React from 'react';
import Friend from './Friend';

const FriendsList = (props) => {
  return (
    // console.log('Friend List', props),
    <div>
      <h1>Friend List</h1>
      {props.friends.map((friend) => {
        return (
          <Friend
            friend={friend}
            displayUpdateForm={props.displayUpdateForm}
            key={friend.id}
          />
        );
      })}
    </div>
  );
};

export default FriendsList;
