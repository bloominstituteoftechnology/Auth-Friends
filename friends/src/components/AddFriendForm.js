import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriendForm = props => {
  const [friendData, setFriendData] = useState({
    name: "",
    age: "",
    email: ""
  });

  useEffect(() => {
    axiosWithAuth()
      .post("/api/friends")
      .then(
        res => console.log(res)
        // res.data.push(friend => {
        //   this.setState({
        //     name: this.state.name,
        //     age: this.state.age,
        //     email: this.state.email
        //   });
        // })
      )
      .catch(err => console.log(err));
  }, []);

  const onChange = e => {
    setFriendData({ [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Add Friends</h1>
      <form onSubmit={props.onSubmit}>
        <div>
          <label>Name: </label>
          <br />
          <input
            type="text"
            name="name"
            onChange={props.onChange}
            value={props.name}
          />
        </div>
        <div>
          <label>Age: </label>
          <br />
          <input
            type="text"
            name="age"
            onChange={props.onChange}
            value={props.age}
          />
        </div>
        <div>
          <label>Email: </label>
          <br />
          <input
            type="text"
            name="email"
            onChange={props.onChange}
            value={props.email}
          />
        </div>
      </form>
      <button type="submit">Add Friend</button>
      <hr />
    </div>
  );
};

export default AddFriendForm;
