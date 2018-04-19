import React from "react";

export default props => {
  return props.friends.map(friend => {
    return <div key={friend.id + friend.name}>{friend.name}</div>;
  });
};
