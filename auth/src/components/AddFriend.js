import React, { useState } from "react";
import axiosWithAuth from "./axiosWithAuth";
import '../Login.css';
import { Button, input, FormControl, FormLabel} from "react-bootstrap";

const AddFriend = () => {
  const [friendData, setFriendData] = useState({name:"", age:"", email:""})
  // const [name, setName] = useState("")
  // const [age, setAge] = useState("")
  // const [email, setEmail] = useState("")

  const handleChange = e => {
    setFriendData(
      {
        ...friendData,
        [e.target.name]: e.target.value
      }
    )
  }

  const onSubmit = e => {
    e.preventDefault()
    // const friendData = {
    //   name: name,
    //   age: age,
    //   email: email
    axiosWithAuth()
      .post("/friends", friendData)
      .then(res => { 
        console.log(e.target)
        setFriendData(
          {
            ...friendData,
            name: "",
            age: "",
            email:""
          }
        )
      })
      .catch(err => console.error(err));
  };

  return (
      <div className="Login">
    <form onSubmit={onSubmit} bsSize="large">
      <input
        // onChange={e => setName(e.target.value)}
        type="text"
        name="name"
        value={friendData.name}
        placeholder="Friend's Name"
        onChange={handleChange}
      />
      <input bsSize="large"
        // onChange={e => setAge(e.target.value)}
        type="text"
        name="age"
        value={friendData.age}
        placeholder="Friend's Age"
        onChange={handleChange}
      />
      <input bsSize="large"
        // onChange={e => setEmail(e.target.value)}
        type="text"
        name="email"
        value={friendData.email}
        placeholder="Friend's email"
        onChange={handleChange}
      />
      <br />
      <Button type="submit">Add Friend!</Button>
    </form>
    </div>
  );
};

export default AddFriend;