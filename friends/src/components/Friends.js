import React, { Component } from "react";
import { connect } from 'react-redux';

import { getFriends } from '../actions';
import Friend from './Friend';

class Friends extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div>
        { this.props.fetchingFriends ? <h2>LOADING...</h2> : null }
        { this.props.error !== '' ? <h2>{this.props.error}</h2> : null }
        { this.props.friends.map( friend => <Friend friend={friend} key={friend.id} />)}
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    fetchingFriends: state.fetchingFriends,
    error: state.error,
  }
}

export default connect(mapStateToProps)(Friends);