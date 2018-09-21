import React, { Component } from "react";
import { connect } from "react-redux";
import { addFriend } from "../actions";

class FriendForm extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			age: null,
			email: "",
		};
	}

	handleChange = event => {
		event.preventDefault();
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	addNewFriend = event => {
		event.preventDefault();
		{
			console.log(this.state);
		}
		this.props.addFriend(this.state);
	};

	render() {
		return (
			<div>
				<form>
					<label>Name:</label>
					<input
						type="text"
						value={this.state.inputName}
						name="name"
						onChange={this.handleChange}
						placeholder="Name"
					/>
					<label>Age:</label>
					<input
						type="number"
						name="age"
						value={this.state.inputAge}
						onChange={this.handleChange}
						placeholder="Age"
					/>
					<label>Email:</label>
					<input
						type="email"
						name="email"
						value={this.state.inputEmail}
						onChange={this.handleChange}
						placeholder="Email"
					/>
					<button onClick={this.addNewFriend}>Submit</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	friends: state.friends
});

export default connect(
	mapStateToProps,
	{ addFriend }
)(FriendForm);