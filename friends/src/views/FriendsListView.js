import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';

import FriendsList from '../components/FriendsList';

class FriendsListView extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    if (this.props.fetching) {
      return <h1>LOADING</h1>;
    }
    return (
      <div>
        <FriendsList friends={this.props.friends} />
      </div>
    );
  }
}

const mapStateToProps = ({ friends, fetching }) => {
  return {
    friends,
    fetching
  };
};

export default connect(
  mapStateToProps,
  { fetchData }
)(FriendsListView);
