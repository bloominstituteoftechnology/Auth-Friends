import React, { Component } from 'react';

import '../styles/EditFriend.css';

class EditFriend extends Component {
	state = {
		name: null,
		age: null,
		email: null,
	};

	componentWillMount() {
		this.setState({
			name: '',
			age: '',
			email: '',
		});
	}

	componentDidMount() {
		this.setState({
			name: this.props.name,
			age: this.props.age,
			email: this.props.email,
		});
	}

	handleInputChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	submitEditButtonClicked = _ => {
		if (this.checkFriend()) this.props.submitEditHandler({ ...this.state });
	};

	checkFriend = _ => {
		const isOkayToAdd = true;
		const editedFriendKeys = this.props.friendKeys.filter(
			email => email !== this.state.email
		);

		for (let i = 0; i < editedFriendKeys; i++) {
			const email = this.props.friendKeys[i];

			if (email === this.state.email) {
				window.alert("New friend's email already exists in database.");
				return !isOkayToAdd;
			}
		}

		if (
			this.state.name === '' &&
			this.state.age === '' &&
			this.state.email === ''
		) {
			window.alert("Please add friend's name, age, and email");
			return !isOkayToAdd;
		} else if (this.state.name === '' && this.state.age === '') {
			window.alert("Please add friend's name and age");
			return !isOkayToAdd;
		} else if (this.state.name === '' && this.state.email === '') {
			window.alert("Please add friend's name and email");
			return !isOkayToAdd;
		} else if (this.state.age === '' && this.state.email === '') {
			window.alert("Please add friend's age and email");
			return !isOkayToAdd;
		} else if (this.state.name === '') {
			window.alert("Please add friend's name");
			return !isOkayToAdd;
		} else if (this.state.age === '') {
			window.alert("Please add friend's age");
			return !isOkayToAdd;
		} else if (this.state.email === '') {
			window.alert("Please add friend's email");
			return !isOkayToAdd;
		} else if (
			!this.state.email.includes('@') &&
			!this.state.email.includes('.')
		) {
			window.alert("Please check friend's email for @ and .");
			return !isOkayToAdd;
		} else if (!this.state.email.includes('@')) {
			window.alert("Please check friend's email for @");
			return !isOkayToAdd;
		} else if (!this.state.email.includes('.')) {
			window.alert("Please check friend's email for .");
			return !isOkayToAdd;
		} else if (this.state.email.length < 7) {
			// e.g. c@c.co = 6 chars
			window.alert('Please enter a valid email');
			return !isOkayToAdd;
		} // add more checks for correct email formatting char@char.char

		return isOkayToAdd;
	};

	render() {
		return (
			<div className="EditFriend">
				<div>
					<div className="EditingFriend">
						<form className="InputForm">
							<input
								className="AddFriendInput"
								onChange={this.handleInputChange}
								type="text"
								name="name"
								value={this.state.name}
							/>

							<input
								className="AddFriendInput"
								onChange={this.handleInputChange}
								type="number"
								min="1"
								name="age"
								value={this.state.age}
							/>

							<input
								className="AddFriendInput"
								onChange={this.handleInputChange}
								type="email"
								name="email"
								value={this.state.email}
							/>

							<input
								className="editFriendConfirmButton"
								type="button"
								value="submit"
								onClick={this.submitEditButtonClicked}
							/>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default EditFriend;
