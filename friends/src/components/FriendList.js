import React, { Component } from "react";
import ListStyled from "../styledComponents/ListStyled";

class FriendList extends Component {
  render() {
    return (
      <ListStyled>
        {this.props.friends.map(friend => {
          return <li>
            {friend.name} is {friend.age} years old, with the email:{" "}
            {friend.email}
          </li>;
        })}
      </ListStyled>
    );
  }
}

export default FriendList;
