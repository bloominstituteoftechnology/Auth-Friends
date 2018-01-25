import React, { Component } from 'react';
import '../styles/AddFriend.css';

class AddFriend extends Component {
	state = {
		name: null,
		age: null,
		email: null,
		isAddingFriend: null,
	};

	componentDidMount() {
		this.setState({
			name: '',
			age: '',
			email: '',
			isAddingFriend: false,
		});
	}

	AddFriendButtonClickHandler = () => {
		this.setState({ isAddingFriend: true });
	};

	CancelAddFriendButtonClickHandler = () => {
		this.setState({
			name: '',
			age: '',
			email: '',
			isAddingFriend: false,
		});
	};

	handleInputChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	addFriendHandler = () => {
		if (this.checkFriend()) {
			const newFriend = {};

			newFriend.name = this.state.name;
			newFriend.age = Number(this.state.age);
			newFriend.email = this.state.email;

			this.CancelAddFriendButtonClickHandler();

			this.props.addFriendHandler(newFriend);
		}
	};

	checkFriend = () => {
		const isOkayToAdd = true;

		for (let i = 0; i < this.props.friendKeys.length; i++) {
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
			<div className="AddFriend">
				<div>
					{!this.state.isAddingFriend ? (
						<div className="AddFriendButtonContainer">
							<button
								className="AddFriendButton"
								onClick={this.AddFriendButtonClickHandler}
							>
								add friend
							</button>
						</div>
					) : (
						<div className="IsAddingFriend">
							<button
								className="CancelAddFriendButton"
								onClick={this.CancelAddFriendButtonClickHandler}
							>
								cancel
							</button>

							<form className="InputForm">
								<input
									className="AddFriendInput"
									onChange={this.handleInputChange}
									type="text"
									name="name"
									value={this.state.name}
									placeholder="name"
								/>

								<input
									className="AddFriendInput"
									onChange={this.handleInputChange}
									type="number"
									min="1"
									name="age"
									value={this.state.age}
									placeholder="age"
								/>

								<input
									className="AddFriendInput"
									onChange={this.handleInputChange}
									type="email"
									name="email"
									value={this.state.email}
									placeholder="email"
								/>

								<input
									className="AddFriendConfirmButton"
									type="button"
									value="submit"
									onClick={this.addFriendHandler}
								/>
							</form>
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default AddFriend;
