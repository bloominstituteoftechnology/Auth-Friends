import React from "react";
import axios from "axios";
import Friend from "./FriendCard";
import styled from "styled-components";
import { connect } from "react-redux";
import { makeFriends, removeFriends } from "../../actions";
const Container = styled.div`
  margin: auto;
  display: flex;
  flex-flow: wrap;
  width: 1250px;
  justify-content: center;
`;
class MakeFriends extends React.Component {
  cbRemoveFriend = id => {
    this.props.removeFriends(id);
  };
  componentDidMount = () => {
    this.props.makeFriends();
  };
  friendsHandler = () => {
    if (friends) {
      return this.props.friends.map(friend => {
        return (
          <>
            <Friend
              key={friend.id}
              id={friend.id}
              friend={friend.name}
              age={friend.age}
              email={friend.email}
              cb={this.cbRemoveFriend}
            />
          </>
        );
      });
    }
  };
  render() {
    return <Container>{this.friendsHandler()}</Container>;
  }
}
const mapStateToProps = state => {
  return {
    friends: state.friends,
    isloadingGET: state.isloadingGET,
    successGET: state.successGET,
    isloadingPOST: state.isloadingPOST,
    successPUT: state.successPUT,
    isloadingDELETE: state.isloadingDELETE,
    successDELTE: state.successDELTE
  };
};

export default connect(
  mapStateToProps,
  { makeFriends, removeFriends }
)(MakeFriends);
