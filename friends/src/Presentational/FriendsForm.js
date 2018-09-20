import React from 'react';

function FriendsForm(props) {
  return (
    <form>
      <input name="name" placeholder="New friend name" value={props.name} onChange={props.handleChange} />
      <button type="submit" onClick={props.handleClick}>Add Friend</button>
    </form>
  )
}

export default FriendsForm;