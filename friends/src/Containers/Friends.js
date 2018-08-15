import React from "react";
import { connect } from "react-redux";

import { fetchFriends } from "../Actions";

class Friends extends React.Component {
	componentDidMount() {
		this.props.fetchFriends();
	}

	render() {
		const { friends, isFetching } = this.props;
		return (
			<div>
				<h1> Friends </h1>
				{isFetching ? (
					<p>Loading...</p>
				) : (
					friends.map(friend => <p>{friend.name}</p>)
				)}
			</div>
		);
	}
}

function mapStateToProps({ friends, isFetching }) {
	return {
		friends,
		isFetching,
	};
}

// function mapDispatchToProps(dispatch) {
//     return{
//         fetchFriends: () => dispatch(fetchFriends())
//     }
// }

export default connect(
	mapStateToProps,
	{ fetchFriends }, //shortcut to mapDispatchToProps as written above
)(Friends);
