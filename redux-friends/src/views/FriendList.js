import React, { Component } from 'react';
import { connect } from 'react-redux';
import Friend from '../components/Friend';
class FriendList extends Component {
  componentDidMount() {
    // Get dat friend data
  }

  render() {
    return (
      <div>
        <p>Hello this is were friends hangggg out.</p>
      </div>
    );
  }
}

export default connect(
  null,
  {}
)(FriendList);
