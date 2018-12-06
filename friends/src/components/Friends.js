import React from "react";

const Friends = props => {
  return props.friends.map(friend => (
    <div key={friend.id}>
      <h2>{friend.name}</h2>
      <p>Age: {friend.age}</p>
      <p>{friend.email}</p>
    </div>
  ));
};

export default Friends;
