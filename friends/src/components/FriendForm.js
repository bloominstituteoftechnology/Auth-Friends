import React from "react";

const FriendForm = props => {
  return (
    <form>
        <input type='text' name='name' placeholder='Name'/>
        <input type='text' name='age' placeholder='Age'/>
        <input type='text' name='email' placeholder='Email'/>
        <button>Add New Friend</button>
        <button>Update Friend</button>
    </form>
  );
};

export default FriendForm;