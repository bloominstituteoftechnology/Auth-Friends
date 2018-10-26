import React from "react";

const Friend = props => {
  const deleteFriend = e => {
    props.delete(props.friend.id);
  };

  return (
    <div className="card card-body">
      <h2 className="card-header">{props.friend.name}</h2>
      <h3>age: {props.friend.age}</h3>
      <h3>email: {props.friend.email}</h3>

      <button
        className="delete-button btn btn-secondary btn-lg"
        onClick={deleteFriend}
      >
        Delete
      </button>
    </div>
  );
};

export default Friend;
