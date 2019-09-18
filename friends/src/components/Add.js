import React, { useState } from "react";

const Add = props => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    age: null
  });

  function handleChanges(e) {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        props.addUser(newUser);
      }}
    >
      <input type="text" name="name" onChange={handleChanges} />
      <input type="number" name="age" onChange={handleChanges} />
      <input type="text" name="email" onChange={handleChanges} />
      <button>New Friends</button>
    </form>
  );
};

export default Add;
