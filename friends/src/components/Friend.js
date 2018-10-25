import React from "react";

const Friend = props => {
  return (
    <div>
      <p>
        {props.friend.name}
        <button onClick={e => props.deleteFriend(e, props.friend.id)}>
          Delete
        </button>
      </p>
    </div>
  );
};

export default Friend;
