import React, { useState } from 'react';
import { Card, CardBody, CardText, Button, Input } from 'reactstrap';

function Friend({ friend, deleteFriend, editFriend }) {
  const [editing, setEditing] = useState(false);
  const [editedFriend, setEditedFriend] = useState({
    name: friend.name,
    age: friend.age,
    email: friend.email
  });

  const handleDelete = (evt, friendId) => {
    evt.preventDefault();
    deleteFriend(friendId);
  };

  const handleClickEdit = (evt, friend) => {
    evt.preventDefault();
    setEditing(true);
  };

  const handleChange = evt => {
    setEditedFriend({
      ...editedFriend,
      [evt.target.name]: evt.target.value
    });
  };

  const sendEdit = (evt, id, editedFriend) => {
    evt.preventDefault();
    editFriend(id, editedFriend);
    setEditing(false);
  };

  return (
    <Card>
      <CardBody>
        {editing ? (
          <>
            <form>
              <Input 
                type="text"
                placeholder="Name"
                name="name"
                value={editedFriend.name}
                onChange={handleChange}
              />
              <Input 
                type="number"
                placeholder="Age"
                name="age"
                value={editedFriend.age}
                onChange={handleChange}
              />
              <Input 
                type="email"
                placeholder="Email"
                name="email"
                value={editedFriend.email}
                onChange={handleChange}
              />
              <Button color="warning" onClick={evt => sendEdit(evt, friend.id, editedFriend)}>Edit Friend</Button>
            </form>
          </>
        ) : (
          <>
          <h4 className="card-title">{friend.name}</h4>
          <CardText>{friend.age}</CardText>
          <CardText>{friend.email}</CardText>
          <Button color="primary" onClick={handleClickEdit}>Edit</Button>{' '}
          <Button color="danger" onClick={evt => handleDelete(evt, friend.id)}>Delete</Button>
          </>
        )}


        
      </CardBody>
    </Card>
  );
};

export default Friend;