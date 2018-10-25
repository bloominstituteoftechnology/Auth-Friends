import React from 'react';
import FriendCard from './FriendCard';

const FriendsList = props => {
  return (
    <div className="friendsList">
      {props.friends.map(friend => {
        return (
          <FriendCard
            key={friend.id}
            friend={friend}
            deleteFriend={props.deleteFriend}
          />
        );
      })}
    </div>
  );
};

export default FriendsList;
