import React, { Component } from "react";
import Friend from "./Friend";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchFriends } from "../actions";

const FriendListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const WaitContainer = styled.h2`
  background: #fee800a6;
  width: 100%;
  text-align: center;
  font-size: 50px;
  padding: 10px;
  border-radius: 5px;
  margin: 15px;
  box-sizing: border-box;
  box-shadow: 1px 1px 15px lightblue, -1px -1px 15px lightblue;
`;
class FriendList extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }
  render() {
    if (this.props.fetchingFriends) {
      return <WaitContainer>WAIT FOR FRIENDS</WaitContainer>;
    }
    return (
      <FriendListContainer>
          {this.props.friends.map(friend => <Friend key={friend.id} friend={friend} />)}
      </FriendListContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    fetchingFriends: state.fetchingFriends,
    friendsFetched: state.friendsFetched
  };
};

export default connect(
  mapStateToProps,
  { fetchFriends }
)(FriendList);
