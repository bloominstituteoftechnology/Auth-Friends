import React from "react";

const Friend = props => {
    console.log("from Friend", props.friend)
  return <li>{props.friend.name}</li>
};

export default Friend;
