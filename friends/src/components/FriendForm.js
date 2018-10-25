import React from "react";

const FriendForm = props => {
  let button;
  if(props.friendStatus === false) {
    button = <button onClick={props.updateFriend}>Update Friend</button>
  } else {
    button = <button onClick={props.addFriend}>Add New Friend</button>
  }
  return (
    <form>
        <input type='text' name='name' placeholder='Name' onChange={props.changeHandler}/>
        <input type='text' name='age' placeholder='Age' onChange={props.changeHandler}/>
        <input type='text' name='email' placeholder='Email' onChange={props.changeHandler}/>
        {button}
        
    </form>
  );
};

export default FriendForm;