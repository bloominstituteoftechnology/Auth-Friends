import React from "react";

const Form = props => {
  return (
    <form>
      <input
        type="text"
        name="name"
        onChange={props.handleInput}
        value={props.name}
        placeholder="Name"
      />
      <input
        type="number"
        name="age"
        onChange={props.handleInput}
        value={props.age}
        placeholder="Age"
      />
      <input
        type="email"
        name="email"
        onChange={props.handleInput}
        value={props.email}
        placeholder="Email"
      />
      <button>Add New Friend</button>
    </form>
  );
};

export default Form;
