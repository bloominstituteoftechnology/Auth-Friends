import React from 'react';

export default function FriendForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter name..."
          value={props.nameInput}
          onChange={props.handleInput}
        />
      </div>
      <div>
        <input
          type="text"
          name="age"
          id="age"
          placeholder="Enter age..."
          value={props.ageInput}
          onChange={props.handleInput}
        />
      </div>
      <div>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter email..."
          value={props.emailInput}
          onChange={props.handleInput}
        />
      </div>
      <div>
        <input type="submit" id="newFriendSubmit" value='Submit' />
      </div>
    </form>
  );
}
