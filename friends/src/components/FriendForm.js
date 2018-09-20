import React from "react";

const FriendForm = props => {
  return (
    <form name="form">
      Name:
      <input
        onChange={props.handleChange}
        name="name"
        type="text"
        value={props.newFriend.name}
        required
      />
      Age:
      <input
        onChange={props.handleChange}
        name="age"
        type="number"
        value={props.newFriend.age}
      />
      Email:
      <input
        onChange={props.handleChange}
        name="email"
        type="text"
        value={props.newFriend.email}
        required
      />
      <div
        className="nav-link button"
        onClick={event => {
          props.addNewFriend(event);
          props.history.push("/friends");
        }}
      >
        Submit!
      </div>
    </form>
  );
};

export default FriendForm;
