import React, { Component } from "react";
import { getFriends } from "../store/actions";
import { connect } from "react-redux";

class FriendList extends Component {
	componentDidMount() {
		this.props.getFriends();
	}
	render() {
		return (
			<div className="friends-list">
				{this.props.friends.map(friend => (
					<div className="friend" key={friend.id}>
						<img className="profile-pic" src={friend.image} />
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
	return { friends: state.friendReducer.friends };
};

export default connect(
	mapStateToProps,
	{ getFriends }
)(FriendList);
