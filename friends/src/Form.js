import React from 'react';


const Form = props => {
  return (
    <div>
      <form action="submit" onSubmit={props.addFriend}>
        <label htmlFor="addfriend">Add Friend:</label><br />
        <input 
          type="text"
          id="addfriend"
          name="addFriendName"
          onChange={props.onChange}
          value={props.addFriendName}
        />
        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
}

export default Form;