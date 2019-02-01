import React from "react";
const Friend = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <input
        type="button"
        value="X"
        onClick={() => props.deleteFriend(props.id)}
      />
    </div>
  );
};

export default Friend;
