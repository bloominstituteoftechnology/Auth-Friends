import React from 'react';

function FriendsForm(props) {
  return (
    <form>
      <input name="name" type="text" placeholder="New friend name" value={props.name} onChange={props.handleChange} />
      <input name="age" type="number" placeholder="New friend age" value={props.age} onChange={props.handleChange} />
      <input name="email" type="text" placeholder="New friend email" value={props.email} onChange={props.handleChange} />
      <button type="submit" onClick={props.handleClick}>Add Friend</button>
    </form>
  )
}

export default FriendsForm;