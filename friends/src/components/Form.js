import React from 'react';
import '../App.css';

const FriendsForm = props => {
  return (
    <div className="form-container">
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={props.name}
          onChange={props.handleInputChange}

        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={props.age}
          onChange={props.handleInputChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={props.email}
          onChange={props.handleInputChange}
        />
        <button onClick={props.handleFriendSubmit}>Submit</button>
        <button onClick={props.handleCancel}>Cancel</button>
      </form>
    </div>
  );
}

export default FriendsForm;
