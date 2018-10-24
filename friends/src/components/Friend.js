import React from "react";

const Friend = ({ friend }) => (
  <div className="friend-card" key={friend.id}>
    <h2>{friend.name}</h2>
    <p>Age: {friend.age}</p>
    <p>
      Email: <a href={`mailto:${friend.email}`}>{friend.email}</a>
    </p>
    <div className="update-delete">
      <span
        className="update-link"
        onClick={() => this.handleUpdate(friend.id)}
      >
        Update
      </span>
      <img
        className="cancel-button"
        src={xCircle}
        alt="delete"
        onClick={() => this.handleDelete(friend.id)}
      />
    </div>
  </div>
);

export default Friend;
