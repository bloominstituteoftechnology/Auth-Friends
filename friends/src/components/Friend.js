import React from "react";

const Friend = props => {
  return (
    <React.Fragment>
      <p>Name: {props.friend.name}</p>
      <p>Age: {props.friend.age}</p>
      <p>Email: {props.friend.email}</p>
    </React.Fragment>
  );
};

export default Friend;
