import React from "react";
import { Link } from "react-router-dom";

const FriendsList = props => {
  return props.friends.map(friend => (
    <Link key={friend.id} to={`/friend/${friend.id}`}>
      <div>
        <h2>{friend.name}</h2>
        <p>Age: {friend.age}</p>
        <p>{friend.email}</p>
      </div>
    </Link>
  ));
};

export default FriendsList;
