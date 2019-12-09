import React, { useState } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import axiosWithAuth from '../../utils/axiosWithAuth';

const FriendsForm = () => {
  const [newFriend, setNewFriend] = useState({
    name: '', age: '', email: ''
  })

  const handleChange = e => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", newFriend)
      .then(res => {
        console.log(res);
        setNewFriend({
          name: '',
          age: '',
          email: ''
        })
        window.location.reload(false);
      })
      .catch(err => {
        console.log(err);
      })
  }  

  return(
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Name</label>
          <Input 
            placeholder="Name"
            type="text"
            name="name"
            value={newFriend.name}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Age</label>
          <Input 
            placeholder="Age"
            type="num"
            name="age"
            value={newFriend.age}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <Input 
            placeholder="Email"
            type="email"
            name="email"
            value={newFriend.email}
            onChange={handleChange}
          />
        </Form.Field>
        <Button type="submit">Add</Button>
      </Form>
    </div>
  )
}

export default FriendsForm;