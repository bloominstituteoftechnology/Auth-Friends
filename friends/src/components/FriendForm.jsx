import React from 'react';

const FriendForm = (props) => {
  return ( 
    <form className="form">
      <label>
      Name:
    <input type="text"
            onChange={props.textInputHandler}
            placeholder="name"
            name="name"
            value={props.name}
    />
    </label>
    <br />
    <label>
      Age:
    <input type="text"
            onChange={props.textInputHandler}
            placeholder="age"
            name="age"
            value={props.age}
    />
    </label>
    <br />
    <label>
      Email:
    <input type="text"
            onChange={props.textInputHandler}
            placeholder="email"
            name="email"
            value={props.email}
    />
    </label> 
    <br />
    <button onClick={props.saveFriendData}>Add Friend</button> 
    </form>
   );
}
 
export default FriendForm;