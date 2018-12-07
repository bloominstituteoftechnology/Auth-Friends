import React from "react";
import { connect } from "react-redux";

import FriendList from "../components/FriendList";
import { getFriends, addNewFriend } from "../actions";

class FriendListView extends React.Component {
	componentDidMount() {
		console.log("CDM FriendListView Props: ", this.props);
		this.props.getFriends();
	}

	render() {
		if (this.props.fetching) {
			return <h2 className="loading-message">Loading friends...</h2>;
		} else {
			return (
				<div className="friends-list-wrapper">
					<FriendList friends={this.props.friends} />
				</div>
			);
		}
	}
}

function mapStateToProps(state) {
	console.log("mapStateToProps ", state);
	return {
		friends: state.friends,
		fetching: state.fetching,
		error: state.error,
	};
}

// function mapDispatchToProps(dispatch) {
// 	return {
// 		addNewFriend: friend => dispatch(addNewFriend(friend)),
// 	};
// }

export default connect(
    mapStateToProps,
	{
		getFriends,
		addNewFriend,
    },
    // mapDispatchToProps,
)(FriendListView);
