import React from "react";

const Friend = props => {
    console.log("from Friend", props.friend)
  return (
    <div>
        <li>{props.friend.name}</li>
        <li>{props.friend.age}</li>
        <li>{props.friend.email}</li>
        <hr />
    </div>
  )};

export default Friend;
