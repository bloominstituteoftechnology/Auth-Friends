import React from "react";

const Friend = props => {
  // console.log("FL", props);
  return (
    <div>
      <p>{props.friend.name}</p>
      <p>{props.friend.age}</p>
      <p>{props.friend.email}</p>
      <button name="delete" onClick={() => props.clickHandle(props.friend.id)}>
        x
      </button>
      <button name="edit" onClick={() => props.clickHandle(props.friend.id)}>
        Edit Friend
      </button>
    </div>
  );
};
export default Friend;
