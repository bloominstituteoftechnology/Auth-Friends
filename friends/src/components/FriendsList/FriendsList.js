import React, { Component } from 'react';
import FriendCard from '../FriendCard/FriendCard';
import { connect } from 'react-redux';
import { fetchFriends } from '../../actions';

class FriendsList extends Component {
  componentDidMount(){
    this.props.fetchFriends();
  };
  render() {
    return (
      <div className="FriendsList">
        <FriendCard />
      </div>
    );
  };
}

const mapDispatchToProps = state => {
  return {
    friends: state.friends,
    fetching: state.fetchingFriends
  }
};
 
export default connect(mapDispatchToProps, { fetchFriends })(FriendsList);