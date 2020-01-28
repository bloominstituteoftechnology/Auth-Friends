import React from 'react';
import { Card, CardBody, CardText, Button } from 'reactstrap';

function Friend({ friend }) {
  return (
    <Card>
      <CardBody>
        <h4 className="card-title">{friend.name}</h4>
        <CardText>{friend.age}</CardText>
        <CardText>{friend.email}</CardText>
      </CardBody>
      <Button>Edit</Button>
    </Card>
  );
};

export default Friend;