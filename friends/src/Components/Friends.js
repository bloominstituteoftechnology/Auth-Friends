import React from "react";
import { Item } from "semantic-ui-react";

const Friends = props => {
  console.log("friends.js: friends", props.friend);
  return (
    <div>
      <Item.Group>
        <Item>
          <Item.Content>
            <Item.Header as="a">Name: {props.friend.name}</Item.Header>
            <Item.Meta>Age: {props.friend.age}</Item.Meta>
            <Item.Extra>Email: {props.friend.email}</Item.Extra>
            <br />
          </Item.Content>
        </Item>
      </Item.Group>
    </div>
  );
};

export default Friends;
