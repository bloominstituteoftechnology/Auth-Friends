import React from "react";
import { Card } from "semantic-ui-react";

export default function FriendCard(props) {
  console.log(props);
  return (
    <div className="friendcard">
      <Card>
        <Card.Header>
          <h2> {props.friend.name}</h2>
        </Card.Header>
        <Card.Meta>
          <h3> {props.friend.age}</h3>
        </Card.Meta>
        <Card.Description>
          <h3>{props.friend.email}</h3>
        </Card.Description>
      </Card>
    </div>
  );
}