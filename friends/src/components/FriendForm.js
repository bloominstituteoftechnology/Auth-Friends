import React from 'react';

const FriendForm = (props) => {
  return (
    <form>
      Name:
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={props.inputData.name}
        onChange={props.handleInput}
      />
      Age:
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={props.inputData.age}
        onChange={props.handleInput}
      />
      Email:
      <input
        type="email"
        name="email"
        placeholder="Email@abc.xyz"
        value={props.inputData.email}
        onChange={props.handleInput}
      />
      <button onClick={props.handleAddFriend}>Add Friend</button>
    </form>
  );
};

export default FriendForm;