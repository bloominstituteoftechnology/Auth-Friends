import React from 'react';
import Friend from './Friend';
const FriendsList = (props) => {
  return (
    <div>
      <h1>Here be your friends:</h1>
      {props.friends.map((friend) => {
        return (
          <Friend
            friend={friend}
            //Below, you're setting a prop of the Friend component for updateForm. This allows the click handler to know which updateForm is associated with which friend, based on which friend you click. Otherwise, it wouldn't know which friend object to update.
            updateForm={props.updateForm}
            key={friend.id}
          />
        );
      })}
    </div>
  );
};
export default FriendsList;