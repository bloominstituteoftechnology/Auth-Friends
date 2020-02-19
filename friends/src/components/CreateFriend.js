import React, { useState } from 'react';
import { withRouter } from 'react-router';
import { axiosWithAuth } from '../authorization/axiosWithAuth.js';

const CreateFriend = (props) => {
 const [friend, setFriend] = useState({name: "", age: 0, email: ""});

  const create = e => {
    e.preventDefault();
    axiosWithAuth()
        .post("/api/friends", friend)
        .then(res => props.history.push('/'))
        .catch(err => console.log(err));
  }

  const handleChange = e => {
      setFriend({
        ...friend,
        [e.target.name]: e.target.value,
      })
  }

    return (
      <div>
        <form onSubmit={create}>
            <label>Name: </label>
          <input
            type="text"
            name="name"
            value={friend.name}
            onChange={handleChange}
          />
          <label>Age: </label>
          <input
            type="number"
            name="age"
            value={friend.age}
            onChange={handleChange}
          />
          <label>Email: </label>
          <input
            type="text"
            name="email"
            value={friend.email}
            onChange={handleChange}
          />
          <button>Create Imaginary Friend</button>
        </form>
      </div>
    )
}

export default CreateFriend;