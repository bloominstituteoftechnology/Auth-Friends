import React, { useState } from "react";

const User = props => {
  const { id, name, age, email } = props.user;
  const [editing, setEditing] = useState(false);

  const [editedUser, setEditedUser] = useState({ name, age, email, id });

  function handleChanges(e) {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  }

  return (
    <div className="friends">
      <form
        onSubmit={e => {
          e.preventDefault();
          props.updateUser(editedUser);
          setEditing(!editing);
        }}
      >
        {editing ? (
          <input
            type="text"
            name="name"
            value={editedUser.name}
            onChange={handleChanges}
          />
        ) : (
          <h1>{name}</h1>
        )}
        {editing ? (
          <input
            type="number"
            name="age"
            value={editedUser.age}
            onChange={handleChanges}
          />
        ) : (
          <h2>{age}</h2>
        )}
        {editing ? (
          <input
            type="text"
            name="email"
            value={editedUser.email}
            onChange={handleChanges}
          />
        ) : (
          <h3>{email}</h3>
        )}
        <button style={{ display: editing ? "block" : "none" }}>
          Update Friend
        </button>
      </form>

      <button
        onClick={() => {
          props.delUser(id);
          setEditing(!editing);
        }}
        style={{ display: editing ? "block" : "none" }}
      >
        By Friend
      </button>
      <button
        onClick={() => setEditing(!editing)}
        style={{ display: editing ? "none" : "block" }}
      >
        Edify
      </button>
    </div>
  );
};

export default User;
