import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriendForm = props => {
  const [friendData, setFriendData] = useState({
    name: "",
    age: "",
    email: ""
  });

  const changeHandler = e => {
    setFriendData({ ...friendData, [e.target.name]: e.target.value });
    console.log(friendData);
  };

  const handleSubmit = e => {
    e.preventDefault();

    axiosWithAuth()
      .post("/api/friends", friendData)
      .then(res => setFriendData(res.data))
      .catch(err => console.log(err));
  };

  return (
    <div>
      {console.log(friendData)}
      <h1>Add Friends</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <div>
          <label>Name: </label>
          <br />
          <input
            type="text"
            name="name"
            onChange={e => changeHandler(e)}
            value={props.name}
          />
        </div>
        <div>
          <label>Age: </label>
          <br />
          <input
            type="text"
            name="age"
            onChange={e => changeHandler(e)}
            value={props.age}
          />
        </div>
        <div>
          <label>Email: </label>
          <br />
          <input
            type="text"
            name="email"
            onChange={e => changeHandler(e)}
            value={props.email}
          />
        </div>
        <button type="submit">Add Friend</button>
      </form>
      <hr />
    </div>
  );
};

export default AddFriendForm;
