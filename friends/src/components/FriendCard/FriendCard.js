import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

const FriendCard = props => {
  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <CardTitle>{props.friend.name}</CardTitle>
          <ul>
            <li><strong>Age:</strong> {props.friend.age}</li>
            <li><strong>Email:</strong> {props.friend.email}</li>
          </ul>
        </CardBody>
      </Card>
    </React.Fragment>
  );
}
 
export default FriendCard;