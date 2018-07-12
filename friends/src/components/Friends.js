import React from "react";

const Friends = (props) => {
  return (
    <ul className="friends-list">
      {props.friends.map(friend => {
        return (
          <div key={friend.id} className="friend-card">
            <p>Name: {friend.name}</p>
            <p>{friend.email}</p>
            <p>Age: {friend.age}</p>
          </div>
        );
      })}
    </ul>
  );
};

export default Friends;
