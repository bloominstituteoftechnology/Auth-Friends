import React from "react";

const FriendForm = props => {
  return (
    <form>
        <input type='text' name='name' placeholder='Name' onChange={props.changeHandler}/>
        <input type='text' name='age' placeholder='Age' onChange={props.changeHandler}/>
        <input type='text' name='email' placeholder='Email' onChange={props.changeHandler}/>
        <button onClick={props.addFriend}>Add New Friend</button>
        <button>Update Friend</button>
    </form>
  );
};

export default FriendForm;