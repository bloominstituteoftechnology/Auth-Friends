import React from "react";

import Friend from "./friend";

const FriendsList = props => {  
  return (
    <div>
      {props.friends.map(friend => {
        return <Friend 
                key={friend.name} 
                deleteFriend={props.deleteFriend} 
                friend={friend} />;
      })}
    </div>
  );
};

export default FriendsList;
