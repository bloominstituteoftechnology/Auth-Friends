import React from "react";

const Friend = props => {
  console.log("FL", props);
  return (
    <div>
      <p>{props.friend.name}</p>
      <p>{props.friend.age}</p>
      <p>{props.friend.email}</p>
    </div>
  );
};
export default Friend;
