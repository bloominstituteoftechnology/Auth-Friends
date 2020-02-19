import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { axiosWithAuth } from '../authorization/axiosWithAuth.js';

const UpdateFriend = (props) => {
    console.log(props.location);
 const [friend, setFriend] = useState({name: "", age: 0, email: ""});

useEffect(() => {
    setFriend(props.location.updateProps);
}, [props.location.updateProps])

  const update = e => {

    e.preventDefault();
    
    console.log("Updating friend with ID " + friend.id + " with data ", JSON.stringify(friend));

    axiosWithAuth()//can't get this to not error with 404 
        .put("/api/friends:" + friend.id, JSON.stringify(friend))
        .then(res => { alert("Sucessfully Updated Friend"); props.history.push('/') })
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
        <form onSubmit={update}>
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
          <button>Update Friend</button>
        </form>
      </div>
    )
}

export default UpdateFriend;