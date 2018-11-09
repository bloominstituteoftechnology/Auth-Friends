import React from "react";
import Friend from "./Friend";
import { connect } from "react-redux";

const FriendList = props => {
  return (
    <div className="friends">
      {props.friends.map(friend => {
        return (
          <Friend
            key={friend.id}
            name={friend.name}
            age={friend.age}
            email={friend.email}
          />
        );
      })}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};
export default connect(mapStateToProps)(FriendList);
