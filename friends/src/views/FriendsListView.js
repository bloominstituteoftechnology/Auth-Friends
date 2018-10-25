import React from 'react';
import { connect } from 'react-redux';
import Friend from '../components/Friend'
import FriendsList from '../components/FriendsList';
import { getFriends } from '../actions';

class FriendListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className="friends">
				{this.props.friends.map(friend => (
					<div className="friend" key={friend.id}>
						<h3>Name: {friend.name}</h3>
						<p>Age: {friend.age}</p>
						<p>Age: {friend.email}</p>
					</div>
				))}
			</div>
		);
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    friends: state.friends,
    error: state.error,
    fetchingFriends: state.fetchingFriends
  };
};

export default connect(
  mapStateToProps,
  { getFriends }
)(FriendListView);
