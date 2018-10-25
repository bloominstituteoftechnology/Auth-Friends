import React from "react";

const UpdateFriendForm = props => {
  return (
    <form className="createForm">
      <input
        type="text"
        name="uname"
        onChange={props.handleInput}
        value={props.name}
        placeholder="Name"
      />
      <input
        type="number"
        name="uage"
        onChange={props.handleInput}
        value={props.age}
        placeholder="Age"
      />
      <input
        type="email"
        name="uemail"
        onChange={props.handleInput}
        value={props.email}
        placeholder="Email"
      />
      <button onClick={props.updateToFriends}>Update Friend</button>
    </form>
  );
};

export default UpdateFriendForm;
