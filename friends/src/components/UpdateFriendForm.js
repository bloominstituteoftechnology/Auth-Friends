import React from "react";
import { connect } from "react-redux";
import { updateFriends } from "../actions/fetchFriends";

class UpdateFriendForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			age: "",
			email: ""
		};
	}

	render() {
		console.log("Props: ", this.props);
		return (
			<form>
				<input type="text" name="name" placeholder="Enter friend's name" />
				<input type="text" name="age" placeholder="Enter friend's age" />
				<input type="text" name="email" placeholder="Enter friend's email" />
				<button
					type="button"
					onClick={() => this.props.updateFriends(this.props.friend)}
				>
					Update Friend
				</button>
			</form>
		);
	}
}

const mapStateToProps = state => {
	// console.log("State: ", state);
	return {
		friends: state.friends
	};
};

export default connect(mapStateToProps, {
	updateFriends
})(UpdateFriendForm);
