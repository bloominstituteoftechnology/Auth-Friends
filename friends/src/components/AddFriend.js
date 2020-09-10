import React, { useState } from "react";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import { Link } from "react-router-dom";


const AddFriend = () => {
  const [newFriend, setNewFriend] = useState({
    name: "",
    age: "",
    email: ""
  })

  const handleChange = e => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value
    });
  }

  const submit = (e) => {
    e.preventDefault();
    AxiosWithAuth()
      .post(`http://localhost:5000/api/friends`, newFriend)
      .then((res) => {
        console.log("friend added", res);
        setNewFriend({ name: "", age: "", email: "" })
      })
      .catch((err) => console.log("No new friends, No new friends", err))
  }



  return (
    <div>
      <h3>Add New Friend</h3>
      <form onSubmit={submit} className="input-group">
        <input
          className="input-group-prepend"
          type="text"
          name="name"
          placeholder="name"
          value={newFriend.name}
          onChange={handleChange}
        />
        <input
          className="input-group-prepend"
          type="text"
          name="age"
          placeholder="age"
          value={newFriend.age}
          onChange={handleChange}
        />
        <input
          className="input-group-prepend"
          type="text"
          name="email"
          placeholder="email"
          value={newFriend.email}
          onChange={handleChange}
        />
        <Link to={`/friends/${newFriend.id}`}>
          <button
            type="button"
            className="btn btn-secondary m-2"
            >
            View {newFriend.name}
          </button>
        </Link>
        <button className="btn btn-primary m-1" type="submit">Add</button>
      </form>
    </div>
  );
}
export default AddFriend;
