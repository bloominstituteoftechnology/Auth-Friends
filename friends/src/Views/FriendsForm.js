import React from 'react';

function FriendsForm(props) {
  return (
    <form>
      <input
        name="name"
        type="text"
        placeholder="Friend's name"
        value={props.input.name}
        onChange={props.handleChange}
      />
      <input
        name="age"
        type="text"
        placeholder="Friend's age"
        value={props.input.age}
        onChange={props.handleChange}
      />
      <input
        name="email"
        type="text"
        placeholder="Friend's email"
        value={props.input.email}
        onChange={props.handleChange}
      />
    </form>
  );
}

export default FriendsForm;
