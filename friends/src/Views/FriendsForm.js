import React from 'react';

import './FriendsFormStyle.css';

function FriendsForm(props) {
  return (
    <form className="friend-form">
      <input
        className="friend-input"
        name="name"
        type="text"
        placeholder="Friend's name"
        value={props.input.name}
        onChange={props.handleChange}
      />
      <input
        className="friend-input"
        name="age"
        type="text"
        placeholder="Friend's age"
        value={props.input.age}
        onChange={props.handleChange}
      />
      <input
        className="friend-input"
        name="email"
        type="text"
        placeholder="Friend's email"
        value={props.input.email}
        onChange={props.handleChange}
      />
      <button
        className="submit-button"
        type="submit"
        onClick={props.handleClick}
      >
        Add
      </button>
    </form>
  );
}

export default FriendsForm;
