import React from "react";
import { Link } from "react-router-dom";

const FriendCard = props => {
  let friend = props.friends.find(
    friend => friend.id.toString() === props.match.params.id
  );

  return (
    <div>
      <div>
        <h2>{friend.name}</h2>
        <h3>Age: {friend.age}</h3>
        <h3>{friend.email}</h3>
      </div>
      <div>
        <Link to={`/form/update/${friend.id}`}>
          <button>Update</button>
        </Link>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default FriendCard;
