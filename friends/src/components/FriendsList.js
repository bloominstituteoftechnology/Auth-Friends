import React from 'react';
import {fetchFriends} from '../actions';
import {connect} from 'react-redux';
class FriendsList extends React.Component {
  componentDidMount() {
    console.log('cdm');
    this.props.fetchFriends();
  }

  render() {
    if (this.props.fetching) return <h1>loading friends</h1>;
    return <h2>Friends List</h2>;
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    fetching: state.fetching,
  };
};

export default connect(
  mapStateToProps,
  {fetchFriends},
)(FriendsList);
