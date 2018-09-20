import React, { Component } from "react";
import { connect } from "react-redux";
import { addFriend } from "../store/actions";

class AddFriend extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			age: null,
			email: ""
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
					<input
						type="text"
						value={this.state.inputName}
						name="name"
						onChange={this.handleChange}
						placeholder="Name"
					/>
					<input
						type="number"
						name="age"
						value={this.state.inputAge}
						onChange={this.handleChange}
						placeholder="Age"
					/>
					<input
						type="email"
						name="email"
						value={this.state.inputEmail}
						onChange={this.handleChange}
						placeholder="Email"
					/>
					<button onClick={this.addNewFriend}>Add Friend!</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	friends: state.friendReducer.friends
});

export default connect(
	mapStateToProps,
	{ addFriend }
)(AddFriend);
