import React, { Component } from "react";
import { connect } from "react-redux";
import { addFriend, getFriends } from "../actions";


class FriendForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			age: "",
			email: ""
		};
	}
	// componentDidMount() {
	// 	this.props.getFriends();
	// }

	sendFriend = (event) => {
		event.preventDefault();
		this.props.addFriend(this.state);
		this.setState({
			name: "",
			age: "",
			email: ""
		});
		setTimeout(() => {
			this.props.getFriends();
		}, 20);
	};

	handleInputChange = (event) => {
		console.log(this.state.name);
		const { name, value } = event.target;
		// name is equal to event.target.name,
		// value is equal to event.target.value
		this.setState({ [name]: value });
	};

	render() {
		return (
			<div>
				<form onSubmit={this.sendFriend}>
					<label>
						Name:
						<input
							type="text"
							name="name"
							placeholder="Name"
							onChange={this.handleInputChange}
							value={this.state.name}
						/>
					</label>
					<label>
						Age:
						<input
							type="text"
							name="age"
							placeholder="Age"
							onChange={this.handleInputChange}
							value={this.state.age}
						/>
					</label>
					<label>
						Email:
						<input
							type="text"
							name="email"
							placeholder="Email"
							onChange={this.handleInputChange}
							value={this.state.email}
						/>
					</label>
					<button type="submit">add friend</button>
				</form>

				{/* <ul className="friend-grid">
					{this.state.friends.map((friend) => {
						return (
							<li key={friend.id} className="friend">
								<div className="friend-name">{friend.name}</div>
								<div className="friend-age">{`Age: ${friend.age}`}</div>
								<div className="friend-email">{`Email: ${friend.email}`}</div>
							</li>
						);
					})}
				</ul> */}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		fetching: state.fetching,
		adding: state.adding,
		friends: state.friends,
		error: state.errorMessage
	};
};
export default connect(mapStateToProps, { addFriend, getFriends })(FriendForm);
