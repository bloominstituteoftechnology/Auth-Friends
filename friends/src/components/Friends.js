import React from 'react';


const Friends = props => {
  return (
    <div>
      {props.friends.map(friend => {
        return (
            <div key={friend.id}>
            <h2>{friend.name}</h2>
            <p><strong>Age:</strong> {friend.age}</p>
            <p><strong>Email:</strong> {friend.email}</p>
            </div>
        )
      })}
    </div>
  );
};

export default Friends;