import React from "react";

export default function NewFriendForm({
  onTypeNewFriendForm,
  newFriend,
  onSubmitNewFriend
}) {
  return (
    <form>
      <label>
        Name
        <input
          type="text"
          name="name"
          onChange={onTypeNewFriendForm}
          value={newFriend.name}
        />
      </label>
      <label>
        Age
        <input
          type="number"
          name="age"
          onChange={onTypeNewFriendForm}
          value={newFriend.age}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          onChange={onTypeNewFriendForm}
          value={newFriend.email}
        />
      </label>
      <button onClick={onSubmitNewFriend}>Add Friend</button>
    </form>
  );
}
