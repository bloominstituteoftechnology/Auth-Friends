import React from "react";
import { connect } from "react-redux";

import { fetchFriends, addFriend, deleteFriend } from "../Actions";

import FriendForm from "../Components/FriendForm";

class Friends extends React.Component {
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
		} = this.props;
		return (
			<div>
				<h1> Friends </h1>
				{isFetching ? (
					<p>Loading...</p>
				) : (
					friends.map(friend => (
						<div
							style={{
								borderBottom: "1px solid #dbdbdb",
								marginBottom: "1rem",
							}}
						>
							<h3>
								{friend.name},{friend.age}
							</h3>
							<a href={`mailto:${friend.email}`}>
								<small>{friend.email}</small>
							</a>
							<button onClick={() => deleteFriend(friend.id)}>
								Murder Friend
							</button>
						</div>
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

function mapStateToProps({ friends, isFetching, isAdding, isDeleting }) {
	return {
		friends,
		isFetching,
		isAdding,
		isDeleting,
	};
}

// function mapDispatchToProps(dispatch) {
//     return{
//         fetchFriends: () => dispatch(fetchFriends())
//     }
// }

export default connect(
	mapStateToProps,
	{ fetchFriends, addFriend, deleteFriend }, //shortcut to mapDispatchToProps as written above
)(Friends);
