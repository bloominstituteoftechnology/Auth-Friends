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
            }) || 'You have no friends :('}
          </ul>
        )}
        {this.props.error ? <p>{this.props.error}</p> : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friendsReducer.friends,
  fetching: state.friendsReducer.fetching,
  error: state.friendsReducer.error
});

export default connect(
  mapStateToProps,
  { fetchFriends }
)(FriendsList);
