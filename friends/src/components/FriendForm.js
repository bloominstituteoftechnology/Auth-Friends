
import React, { useState } from "react";
import axios from "axios";


const FriendForm = props => {
  const [friendForm, setFriendForm] = useState({
    name: "",
    age: "",
    email: ""
  });

  const [post, setPost] = useState([]);

  const handleChanges = e => {
    setFriendForm({
      ...friendForm,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = e => {
    e.preventDefault();
    props.newFriend(friendForm);
    axios
      .post("api/friends", friendForm)
      .then((res) => {
        setPost(res.data);
        console.log("Friend Post Api Working", post);

        setFriendForm({ name: "", age: "", email: "" });
      })
      .catch((err) => console.log("Friend API NOT WORKING", err));
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        value={friendForm.name}
      />
      <label htmlFor="age">Age</label>
      <input
        id="age"
        type="text"
        name="age"
        onChange={handleChanges}
        value={friendForm.age}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        onChange={handleChanges}
        value={friendForm.email}
      />

      <input 
      type="submit"
      />
    </form>
  );
};

export default FriendForm;