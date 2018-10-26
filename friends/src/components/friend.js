import React from "react";

const Friend = props => {
  const deleteFriend = e => {
    console.log(props.friend.id);
    props.delete(props.friend.id);
  };

  return (
    <div className="card card-body">
      <h2>{props.friend.name}</h2>
      <h3>age: {props.friend.age}</h3>
      <h3>email: {props.friend.email}</h3>

      <div className="delete-button" onClick={deleteFriend}>
        Delete
      </div>
    </div>
  );
};

export default Friend;
