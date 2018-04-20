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
	handleNewInput = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handleUpdateFriend = () => {
		const friend = { id: this.props.friend };
		if (this.state.name !== "") {
			friend.name = this.state.name;
		}
		if (this.state.age !== "") {
			friend.age = this.state.age;
		}
		if (this.state.email !== "") {
			friend.email = this.state.email;
		}
		this.props.updateFriends(friend);
		this.setState({ name: "", age: "", email: "" });
	};
	render() {
		return (
			<form>
				<input
					type="text"
					name="name"
					value={this.state.name}
					onChange={this.handleNewInput}
					placeholder="Enter friend's name"
				/>
				<input
					type="text"
					name="age"
					value={this.state.age}
					onChange={this.handleNewInput}
					placeholder="Enter friend's age"
				/>
				<input
					type="text"
					name="email"
					value={this.state.email}
					onChange={this.handleNewInput}
					placeholder="Enter friend's email"
				/>
				<button type="button" onClick={this.handleUpdateFriend}>
					Update Friend
				</button>
			</form>
		);
	}
}

const mapStateToProps = state => {
	return {
		friends: state.friends
	};
};

export default connect(mapStateToProps, {
	updateFriends
})(UpdateFriendForm);
