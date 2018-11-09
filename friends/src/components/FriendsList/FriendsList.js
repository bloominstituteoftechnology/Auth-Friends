import React from 'react';

const FriendsList = (props) => {
  return (
    <div>
      {props.friends.map((friend, id) => {
        return <Friend key={id} friend={friend} />
      })}
    </div>
  );
}

export default FriendsList;
