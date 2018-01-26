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
		this.props.submitEditHandler({ ...this.state });
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
