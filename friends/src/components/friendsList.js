import React, { Component } from "react";
import { connect } from "react-redux";
import { 
	getFriends, 
	deleteFriend, 
	// editFriend,
} from "../actions";

class FriendsList extends Component {
	componentDidMount() {
		this.props.getFriends();
	}

	// event.preventDefault();
	removeFriend = (id) => {
		this.props.deleteFriend(id);
		// 	.filter(friend => {
		// 	return friend.id;
		// })
		setTimeout(() => {
			this.props.getFriends();
		}, 20);
	};

	handleEdit = (id) => {
		this.props.editFriend(id);
	}

	render() {
		return (
			<div>
				{this.props.fetching ? (
					<p>Loading...</p>
				) : (
					<ul className="friend-grid">
						{this.props.friends.map((friend) => {
							return (
								<li className="friend" key={friend.id}>
									<div className="friend-name">{friend.name}</div>
									<div className="friend-age">{friend.age}</div>
									<div className="friend-email">{friend.email}</div>
									<div>
										{/* <button onClick={() => this.handleEdit(friend.id)}>Edit</button> */}
										<button onClick={() => this.removeFriend(friend.id)}>Delete</button>
									</div>
								</li>
							);
						})}
					</ul>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		fetching: state.fetching,
		friends: state.friends,
		error: state.errorMessage
	};
};

export default connect(mapStateToProps, { 
	getFriends, 
	deleteFriend,
	// editFriend,
})(FriendsList);
