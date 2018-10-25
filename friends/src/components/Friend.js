import React from "react";

const Friend = props => (
  <div>
    <h2>
      <span
        onClick={() =>
          props.toggleOnEditing(
            props.friend.name,
            props.friend.age,
            props.friend.email,
            props.friend.id
          )
        }
      >
        edit
      </span>{" "}
      Name: {props.friend.name}{" "}
      <span onClick={() => props.deleteFriend(props.friend.id)}>x</span>
    </h2>
    <p>Age: {props.friend.age}</p>
    <p>Email: {props.friend.email}</p>
  </div>
);

export default Friend;
