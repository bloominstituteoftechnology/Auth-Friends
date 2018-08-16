import React from "react";
import { connect } from "react-redux";

import {
	fetchFriends,
	addFriend,
	deleteFriend,
	updateFriend,
} from "../Actions";

import FriendForm from "../Components/FriendForm";
import Friend from "../Components/Friend";

class Friends extends React.Component {
	state = {
		formVisible: false,
	};

	componentDidMount() {
		this.props.fetchFriends();
	}

	render() {
		const {
			friends,
			isFetching,
			addFriend,
			isAdding,
			isDeleting,
			deleteFriend,
			updateFriend,
			isUpdating,
		} = this.props;
		return (
			<div>
				<h1> Friends </h1>
				{isFetching ? (
					<p>Loading...</p>
				) : (
					friends.map(friend => (
						<Friend
							friend={friend}
							key={friend.id}
							onFormSubmit={updateFriend}
							isUpdating={isUpdating}
							isDeleting={isDeleting}
							deleteFriend={deleteFriend}
						/>
					))
				)}
				{isAdding ? (
					<p>Adding friend...</p>
				) : (
					<FriendForm onFormSubmit={addFriend} />
				)}
			</div>
		);
	}
}

function mapStateToProps({
	friends,
	isFetching,
	isAdding,
	isDeleting,
	isUpdating,
}) {
	return {
		friends,
		isFetching,
		isAdding,
		isDeleting,
		isUpdating,
	};
}

// function mapDispatchToProps(dispatch) {
//     return{
//         fetchFriends: () => dispatch(fetchFriends())
//     }
// }

export default connect(
	mapStateToProps,
	{ fetchFriends, addFriend, deleteFriend, updateFriend }, //shortcut to mapDispatchToProps as written above
)(Friends);
