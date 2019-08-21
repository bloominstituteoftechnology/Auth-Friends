import React from "react";
import { Card, CardHeader, CardBody } from "shards-react";

const FriendCard = props => {
  return (
    <Card style={{ maxWidth: "300px" }}>
      <CardHeader>{props.friend.name}</CardHeader>
      <CardBody>
        <p>{props.friend.age}</p>
      </CardBody>
    </Card>
  );
};

export default FriendCard;
