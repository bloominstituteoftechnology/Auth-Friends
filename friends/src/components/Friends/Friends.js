import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import axiosWithAuth from '../../utils/axiosWithAuth';

const Friends = ({ friend }) => {
  const handleDelete = e => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`/friends/${friend.id}`)
      .then(res => {
        window.location.reload(false);
        console.log(res);
      })
      .catch(err => console.log(err));
  }
  return (
    <>
      <Card>
        <Card.Content>
          <Card.Header>{friend.name}</Card.Header>
          <Card.Meta>{friend.age} years old</Card.Meta>
          <Card.Description>{friend.email}</Card.Description>
          <Button.Group>
            <Button positive>Edit</Button>
            <Button.Or />
            <Button negative onClick={handleDelete}>Delete</Button>
          </Button.Group>
        </Card.Content>
      </Card>
    </>
  );
}

export default Friends;