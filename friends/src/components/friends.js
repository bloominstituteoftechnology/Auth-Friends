import React from "react";

import Friend from "./friend";

const Friends = props => {
  return (
    <div className="container">
      <ul>
        {props.friends.map(friend => {
          return <Friend key={friend.name} friend={friend} />;
        })}
      </ul>
      <form type="submit">
        Name:
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={props.newFriend.name}
          onChange={props.handleChanges}
        />
        Age:
        <input
          type="text"
          placeholder="Age"
          name="age"
          value={props.newFriend.age}
          onChange={props.handleChanges}
        />
        Email:
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={props.newFriend.email}
          onChange={props.handleChanges}
        />
        <button onClick={props.addFriend }> Add friend</button>
      </form>
    </div>
  );
};

export default Friends;
