import React from "react";
import Friend from './Friend';
import FriendForm from './FriendForm';

const Friends = props => {
  return (
    <div>
        {props.friends.map(friend => {
        return <Friend key={friend.name} friend={friend} />;
        })}
        <FriendForm addFriendHandler={props.addFriendHandler}/>
    </div>
  );
};

export default Friends;
