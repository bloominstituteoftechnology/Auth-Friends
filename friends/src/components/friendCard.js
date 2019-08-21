import React from "react";
import { Card, CardHeader, CardBody, CardImg, Container } from "shards-react";
import { Footer } from "./footer";

const FriendCard = props => {
  return (
    <Card style={{ maxWidth: "150px" }}>
      <CardImg className="friend-img" src={`${props.friend.avatar}`} />
      <CardBody className="friend-body">
        <p>{props.friend.name}</p>
        <p>{props.friend.age}</p>
      </CardBody>
    </Card>
  );
};

export default FriendCard;
