import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFriends } from '../actions';
import Friend from '../components/Friend';

import styled from 'styled-components';

const StyledFriendsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
class FriendList extends Component {
  componentDidMount() {
    // Get dat friend data
    return !this.props.friends.length ? this.props.fetchFriends() : null;
  }

  render() {
    return (
      <StyledFriendsList>
        {this.props.isFetching ? (
          <p>Hello this is were friends hangggg out.</p>
        ) : (
          this.props.friends.map(friend => (
            <Friend friend={friend} key={friend.id} />
          ))
        )}
      </StyledFriendsList>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    isFetching: state.isFetching
  };
};

export default connect(
  mapStateToProps,
  { fetchFriends }
)(FriendList);
