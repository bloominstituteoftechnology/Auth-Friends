import React from "react";

const Friends = props => {
  if (!props.friends || !props.friends.length) {
    return <h3>Loading our friends!</h3>;
  }

  return props.friends.map(friend => (
    <div key={friend.id} className="card">
      <p>Name: {friend.name}</p>
      <p>Age: {friend.age}</p>
      <p>Email: {friend.email}</p>
      <button className="btn" onClick={() => props.deleteFriend(friend.id)}>
        Delete Friend!
      </button>
    </div>
  ));
};

export default Friends;
