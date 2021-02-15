import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const NewFriend =({setFriendsList})=>{
const [newFriend, setNewFriend]= useState({
    id: Date.now();
    name:'',
    age:'',
    email:'',
 });

const handleChange = e => {
    setNewFriend({ ...newFriend, [e.target.name]:e.target.value});
};

const handleSubmit = e => {
    axiosWithAuth().post('/friends', newFriend)
        .then((res) => {
        setFriendsList(res.data);
        setNewFriend({
        name: "",
        age: "",
        email: "",
        });
  });
};

return (
<div>
  <h2>Add More Friends Here</h2>
  <form onSubmit={handleSubmit}>
    Name:
    <input
      type="text"
      name="name"
      value={newFriend.name}
      onChange={handleChanges}
    ></input>
    Age:
    <input
      type="text"
      name="age"
      value={newFriend.age}
      onChange={handleChanges}
    ></input>
    Email:
    <input
      type="text"
      name="email"
      value={newFriend.email}
      onChange={handleChanges}
    ></input>
    <button type="submit">Submit</button>
  </form>
</div>
);
};

export default NewFriend;