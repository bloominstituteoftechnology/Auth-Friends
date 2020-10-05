import React from "react";

const AddFriendForm = (props) => {
  return (
    <form onSubmit={props.submit}>
      <label> Name:&nbsp;</label>
      <input
        type="text"
        name="name"
        value={props.friend.name}
        onChange={props.changeHandle}
      />
      <label> Age:&nbsp;</label>
      <input
        type="text"
        name="age"
        value={props.friend.age}
        onChange={props.changeHandle}
      />
      <label>Email:&nbsp;</label>
      <input
        type="text"
        name="email"
        value={props.friend.email}
        onChange={props.changeHandle}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddFriendForm;