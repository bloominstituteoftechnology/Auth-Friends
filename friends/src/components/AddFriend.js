import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const AddFriend = props => {
  const [addedFriend, setAddedFriend] = useState({});

  const submitHandler = e => {
      e.preventDefault();
      axiosWithAuth()
      .post(`http://localhost:5000/api/friends`, addedFriend)
      .then(res => {
        console.log(res.data);
        props.history.push("/protected");
      })
      .catch(err => {
          console.log(err)
      });
  };

  const changeHandler = e => {
      setAddedFriend({
          ...addedFriend,
          [e.target.name]: e.target.value
      });
  };

  return (
      <div>
        <form onSubmit={submitHandler}>
          <input
            name="name"
            type="text"
            placeholder="Enter Full Name"
            value={addedFriend.name}
            onChange={changeHandler} />
          <input
            name="age"
            type="number"
            placeholder="Enter Age"
            value={addedFriend.age}
            onChange={changeHandler}
          />
          <input
            name="email"
            type="text"
            placeholder="Enter Email"
            value={addedFriend.email}
            onChange={changeHandler}
          />
          <button type="submit">Add Friend!</button>
        </form>
      </div>
    );
}

export default AddFriend;