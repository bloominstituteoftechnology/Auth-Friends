import React from 'react';

const FriendForm = (props) => {
  // console.log('friend form', props);
  return (
    <form>
      Name:
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={props.friendDataInput.name}
        onChange={props.handleInput}
      />
      Age:
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={props.friendDataInput.age}
        onChange={props.handleInput}
      />
      Email:
      <input
        type="email"
        name="email"
        placeholder="Email@abc.xyz"
        value={props.friendDataInput.email}
        onChange={props.handleInput}
      />
      <button onClick={props.handleAddFriend}>Add Friend</button>
    </form>
  );
};

export default FriendForm;
