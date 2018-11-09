import React, { Component } from "react";
import { connect } from 'react-redux';

import { getFriends } from '../actions';
import Friend from './Friend';

import styled from 'styled-components';

const FriendsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 25px;
`;


class Friends extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <FriendsContainer>
        { this.props.loading ? <h2>LOADING...</h2> : null }
        { this.props.error !== '' ? <h2>{this.props.error}</h2> : null }
        { this.props.friends.map( friend => <Friend friend={friend} key={friend.id} />)}
      </FriendsContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    loading: state.loading,
    error: state.error,
  }
}

export default connect(mapStateToProps, { getFriends })(Friends);