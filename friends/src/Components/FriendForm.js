import React from "react";

const initState = {
	name: "",
	age: "",
	email: "",
};

class FriendForm extends React.Component {
	state = {
		name: "",
		age: "",
		email: "",
	};

	handleChange = ({ target: { name, value } }) =>
		this.setState({ [name]: value });

	// handleChange = event =>
	//     this.setState({
	//         [event.target.name]: event.target.value
	//     });

	render() {
		return (
			<form
				onSubmit={e => {
					e.preventDefault();
					this.props.onFormSubmit(this.state);
					this.setState(initState);
				}}
			>
				<div>
					<input
						onChange={this.handleChange}
						type="text"
						placeholder="Enter Name"
						name="name"
						value={this.state.name}
					/>
				</div>
				<div>
					<input
						onChange={this.handleChange}
						type="number"
						placeholder="Enter Age"
						name="age"
						value={this.state.age}
					/>
				</div>
				<div>
					<input
						onChange={this.handleChange}
						type="email"
						placeholder="Enter Email"
						name="email"
						value={this.state.email}
					/>
				</div>
				<button>Submit!</button>
			</form>
		);
	}
}

export default FriendForm;
