import React from "react";

import Friend from "./Friend";
import FriendsListView from "../views/FriendsListView";

const FriendsList = props => {
  return (
    <div>
      {props.friends.map((friend, index) => {
        return <Friend key={index} friend={friend} />;
      })}
    </div>
  );
};

export default FriendsList;
