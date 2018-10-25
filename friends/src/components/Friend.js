import React from "react";
import xCircle from "../assets/x-circle.svg";
import edit from "../assets/edit.svg";

const Friend = ({ friend, handleUpdate, handleDelete }) => (
  <div className="friend-card" key={friend.id}>
    <h2>{friend.name}</h2>
    <p>Age: {friend.age}</p>
    <p>
      Email: <a href={`mailto:${friend.email}`}>{friend.email}</a>
    </p>
    <div className="update-delete">
      <img
        className="update-link"
        src={edit}
        alt="update"
        onClick={() => handleUpdate(friend.id)}
      />

      <img
        className="cancel-button"
        src={xCircle}
        alt="delete"
        onClick={() => handleDelete(friend.id)}
      />
    </div>
  </div>
);

export default Friend;
