import React, { Component } from 'react';

import EditFriend from './EditFriend';

import '../styles/Friend.css';

class Friend extends Component {
	state = {
		index: '',
		name: '',
		age: '',
		email: '',
		isEditing: null,
	};

	componentDidMount() {
		this.setState({
			index: this.props.index,
			name: this.props.friend.name,
			age: this.props.friend.age,
			email: this.props.friend.email,
			isEditing: false,
		});
	}

	deleteFriendButtonClicked = index => {
		if (
			window.confirm(
				`This will remove ${
					this.state.name
				} as a friend? This CANNOT be undone. Are you sure you want to continue?`
			)
		)
			this.props.deleteFriendHandler(Number(this.state.index));
	};

	editButtonClickedHandler = _ => {
		this.setState({ isEditing: !this.state.isEditing });
	};

	submitEditHandler = editedFriend => {
		this.props.editFriendHandler(editedFriend, Number(this.state.index));
	};

	render() {
		return (
			<div className="Friend">
				<div className="ButtonsHeader">
					<button
						className="DeleteFriendButton"
						onClick={this.deleteFriendButtonClicked}
					>
						&#x2717;
					</button>
				</div>

				<div className="FriendMainContainer">
					{!this.state.isEditing ? (
						<div className="IsNotEditingFriend">
							<div className="EditButtonHeader">
								<button
									className="EditButton"
									onClick={this.editButtonClickedHandler}
								>
									edit
								</button>
							</div>

							<div className="FriendInfo">
								<li className="Friend__listItem">
									<h2 className="Friend__listItem--name">{this.state.name}</h2>
								</li>

								<li className="Friend__listItem">
									<div className="Friend__listItem--email">
										{this.state.email}
									</div>
								</li>

								<li className="Friend__listItem">{this.state.age} years old</li>
							</div>
						</div>
					) : (
						<div className="IsEditingFriend">
							<button
								className="CancelEditButton"
								onClick={this.editButtonClickedHandler}
							>
								cancel
							</button>

							<EditFriend
								name={this.state.name}
								age={this.state.age}
								email={this.state.email}
								submitEditHandler={this.submitEditHandler}
								friendKeys={this.props.friendKeys}
							/>
						</div>
					)}
				</div>

				<div className="FriendsDetailedHeader" />
			</div>
		);
	}
}

export default Friend;
