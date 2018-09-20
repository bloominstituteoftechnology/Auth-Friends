import React from 'react';

function FriendsForm(props) {
  return (
    <form>
      <input name="name" placeholder="New friend name" value={props.inputName} />
      <button type="submit">Add Friend</button>
    </form>
  )
}

export default FriendsForm;