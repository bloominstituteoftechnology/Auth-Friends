import React from 'react';

const NewFriendForm = props => {
  return (
    <div>
      <form onSubmit={props.addFriend}>
        <input
          onChange={props.handleChange}
          name="name"
          value={props.name}
          type="text"
          placeholder="Name"
        />
        <input
          onChange={props.handleChange}
          name="age"
          value={props.age}
          type="number"
          placeholder="Age"
        />
        <input
          onChange={props.handleChange}
          name="email"
          value={props.email}
          type="email"
          placeholder="Email"
        />
        <button onClick={props.addFriend}>Hey Pal!</button>
      </form>
    </div>
  );
};

export default NewFriendForm;
