import React, { useState } from 'react';
import { Input, Button } from 'reactstrap';

function FriendForm({ addFriend }) {
  const [newFriend, setNewFriend] = useState({
    name: '',
    age: '',
    email: ''
  });

  const handleChange = evt => {
    setNewFriend({
      ...newFriend,
      [evt.target.name]: evt.target.value
    });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    addFriend(newFriend);
    setNewFriend({
      name: '',
      age: '',
      email: ''
    });
  }

  return (
    <>
    <form>
      <Input 
        type="text"
        placeholder="Name"
        name="name"
        value={newFriend.name}
        onChange={handleChange}
        required
      />
      <Input 
        type="number"
        placeholder="Age"
        name="age"
        value={newFriend.age}
        onChange={handleChange}
        required
      />
      <Input 
        type="email"
        placeholder="Email"
        name="email"
        value={newFriend.email}
        onChange={handleChange}
        required
      />
      <Button color="primary" size="lg" type="submit" className="btn-big" onClick={handleSubmit}>Add Friend</Button>
    </form>
    </>
  );
}

export default FriendForm;