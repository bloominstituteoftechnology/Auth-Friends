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
      className="addFriend"
      onSubmit={e => {
        e.preventDefault();
        props.addUser(newUser);
      }}
    >
      Name{" "}
      <input
        type="text"
        name="name"
        onChange={handleChanges}
        placeholder="Name"
      />{" "}
      <br />
      Age{" "}
      <input
        type="number"
        name="age"
        onChange={handleChanges}
        placeholder="Age"
      />
      <br />
      Email{" "}
      <input
        type="text"
        name="email"
        onChange={handleChanges}
        placeholder="Email"
      />
      <button>New Friends</button>
    </form>
  );
};

export default Add;
