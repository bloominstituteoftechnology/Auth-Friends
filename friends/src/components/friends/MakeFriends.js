import React from "react";
import axios from "axios";
import Friend from "./FriendCard";
import styled from "styled-components";
import { connect } from "react-redux";
import { makeFriends, removeFriends } from "../../actions";
import Spinner from "./spinner.gif";
const Container = styled.div`
  margin: auto;
  display: flex;
  flex-flow: wrap;
  width: 1250px;
  justify-content: center;
  align-items: center;
`;
const IMAGE = styled.img`
  text-align: center;
  width: 100%;
  display: block;
  margin: auto;
`;
class MakeFriends extends React.Component {
  cbRemoveFriend = id => {
    this.props.removeFriends(id);
    this.props.makeFriends();
  };
  componentDidMount = () => {
    this.props.makeFriends();
  };
  getRandomInt = (min, max) => {
    return Math.random() * (max - min) + min;
  };
  friendsHandler = () => {
    if (this.props.friends) {
      return this.props.friends.map(friend => {
        let date = Date.now();
        return (
          <Friend
            key={date + this.getRandomInt(1000, 25000)}
            id={friend.id}
            friend={friend.name}
            age={friend.age}
            email={friend.email}
            cb={this.cbRemoveFriend}
          />
        );
      });
    }
  };
  render() {
    if (this.props.isloadingGET) {
      return (
        <Container>
          <img src={Spinner} />
        </Container>
      );
    }
    return (
      <Container key={this.getRandomInt(1000, 25000)}>
        {this.friendsHandler()}
      </Container>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    friends: state.friends,
    user: state.user,
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
