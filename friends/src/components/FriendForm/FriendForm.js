import React from "react";

const FriendForm = props => {
    console.log(props)
  return (
    <div>
      <form onSubmit={e => props.handleSubmit(e)}>
        <input
          type="text"
          placeholder="Name"
          value={props.item.name}
          onChange={props.handleChanges}
          name='name'
        />
        <input
          type="number"
          placeholder="Age"
          value={props.item.age}
          onChange={props.handleChanges}
          name='age'
        />
        <input
          type="text"
          placeholder="Email"
          value={props.item.email}
          onChange={props.handleChanges}
          name='email'
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FriendForm
