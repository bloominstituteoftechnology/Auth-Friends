import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Button } from "reactstrap";

const AddFriend = props => {
  const initialFriendData = {
    name: "",
    age: "",
    email: ""
  };

  const [friendData, setFriendData] = useState(initialFriendData);

  const handleChange = event => {
    setFriendData({ ...friendData, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .post("friends/", friendData)
      .then(response => {
        console.log("Friend added", response);
        props.history.push("/friends");
      })
      .catch(error => {
        console.log("Could not add friend", error);
      });
  };

  return (
    <form name="addFriend">
      <label htmlFor="name">
        Name:
        <input
          type="text"
          name="name"
          value={friendData.name}
          onChange={handleChange}
          placeholder="John Smith"
          required
        />
      </label>

      <label htmlFor="age">
        Age:
        <input
          placeholder="34"
          type="text"
          name="age"
          value={friendData.age}
          onChange={handleChange}
          required //not working??
        />
      </label>

      <label htmlFor="email">
        Email:
        <input
          placeholder="JohnSmith@email.com"
          type="text"
          name="email"
          value={friendData.email}
          onChange={handleChange}
          required //not working??
        />
      </label>
      <br />
      <Button color="info" name="submit" onClick={handleSubmit}>
        Add Friend
      </Button>
    </form>
  );
};

export default AddFriend;
