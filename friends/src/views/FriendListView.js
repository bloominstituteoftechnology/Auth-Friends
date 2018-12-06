import React from "react";
import { connect } from "react-redux";

import FriendList from "../components/FriendList";
import { getFriends } from "../actions";



class FriendListView extends React.Component {

	componentDidMount() {
        console.log('CDM FriendListView Props: ', this.props)
		this.props.getFriends();
    }
    
	render() {
		if (this.props.fetching) {
			return (
				<h2 className="loading-message">
					Loading friends...
				</h2>
			);
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

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
	mapStateToProps,
	{
		getFriends,
	}
)(FriendListView);
