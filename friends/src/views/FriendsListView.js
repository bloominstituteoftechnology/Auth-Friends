import React from "react";
import { connect } from "react-redux";

import { FriendsList } from "../components";
import { getFriends } from "../actions";

class FriendsListView extends React.Component {

	componentDidMount() {
		// call the action
		this.props.getFriends();

	}

	render() {
		if(this.props.loading) {
			// return something to indicate that friends are loading
			return <h2>Loading Amigos....</h2>
		}

		return (
			<div className="FriendsList-wrapper">
				<FriendsList friends={this.props.friends} />
			</div>
		);
	}
}

///our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
	return {
		friends: state.friendReducer.friends,
		error: state.friendReducer.error,
		loading: state.friendReducer.loading
	};
};

export default connect(mapStateToProps, { getFriends })(FriendsListView);
