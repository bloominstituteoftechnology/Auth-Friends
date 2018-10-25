import React from "react";

const Friend = props => (
  <div className="friend">
    <h3>
      <span
        onClick={() =>
          props.toggleOnEditing(
            props.friend.name,
            props.friend.age,
            props.friend.email,
            props.friend.id
          )
        }
        className="editSpan"
      >
        <i className="fas fa-edit" />
      </span>{" "}
      Name: {props.friend.name}{" "}
      <span
        onClick={() => props.deleteFriend(props.friend.id)}
        className="deleteSpan"
      >
        <i className="fas fa-minus-circle" />
      </span>
    </h3>
    <p>Age: {props.friend.age}</p>
    <p>Email: {props.friend.email}</p>
  </div>
);

export default Friend;
