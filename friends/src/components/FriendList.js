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
						<h3>{friend.name}</h3>
						<p>{friend.age}</p>
						<p>{friend.email}</p>
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
