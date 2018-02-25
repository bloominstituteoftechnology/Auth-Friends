import React, { Component } from "react";
import ListStyled from "../styledComponents/ListStyled";

class FriendList extends Component {
  render() {
    return (
      <ListStyled>
        {this.props.friends.map(friend => {
          return <div>
            {friend.name} is {friend.age} years old, with the email:{" "}
            {friend.email}
          </div>;
        })}
      </ListStyled>
    );
  }
}

export default FriendList;
