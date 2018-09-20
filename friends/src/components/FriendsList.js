import React, { Component } from 'react';
import { connect } from 'react-redux';
import Friend from './Friend';
import { fetchFriends } from '../actions';

class FriendsList extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }
  render() {
    return (
      <div className="FriendsList">
        {this.props.fetching ? (
          <p>Reticulating Splines...</p>
        ) : (
          <ul>
            {this.props.friends.map(friend => {
              return <Friend key={friend.id} friend={friend} />;
            })}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friendsReducer.friends,
  fetching: state.friendsReducer.fetching
});

export default connect(
  mapStateToProps,
  { fetchFriends }
)(FriendsList);
