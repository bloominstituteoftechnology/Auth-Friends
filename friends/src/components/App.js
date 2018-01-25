import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends, addFriend } from '../actions/';

import Header from './Header';
import AddFriend from './AddFriend';
import Friends from './Friends';
import logo from '../assets/logo.svg';

import '../styles/App.css';

class App extends Component {
	state = {
		friends: [],
		fetchingFriends: null,
		isAddingFriend: null,
		addFriend: {
			name: '',
			age: '',
			email: '',
		},
		friendClickedEmails: [],
	};

	componentDidMount() {
		this.setState({ isAddingFriend: false });

		this.props.getFriends();
	}

	addFriendButtonClicked = () => {
		this.setState({ isAddingFriend: !this.state.isAddingFriend });
	};

	addFriendHandler = () => {
		let isOkayToAdd = true;

		this.props.friends.forEach(friend => {
			if (friend.email === this.state.addFriend.email) {
				isOkayToAdd = false;
				window.alert("New friend's email already exists in database.");
				return null;
			}
		});

		if (isOkayToAdd) {
			this.props.addFriend(this.state.addFriend);
			this.addFriendButtonClicked();
		}
	};

	handleAddFriendInput = (name, value) => {
		const addFriend = { ...this.state.addFriend };
		if (name === 'name') addFriend.name = value;
		else if (name === 'number') addFriend.age = Number(value);
		else if (name === 'email') addFriend.email = value;
		this.setState({ addFriend });
	};

	friendClicked = email => {
		if (this.state.friendClickedEmails.includes(email))
			this.setState({
				friendClickedEmails: this.state.friendClickedEmails.filter(
					clickedEmail => clickedEmail !== email
				),
			});
		else
			this.setState({
				friendClickedEmails: [...this.state.friendClickedEmails, email],
			});
	};

	render() {
		return (
			<div className="App">
				<Header />

				{!this.props.fetchingFriends ? (
					<div className="ShowFriends">
						<AddFriend
							isAddingFriend={this.state.isAddingFriend}
							addFriendButtonClicked={this.addFriendButtonClicked}
							handleAddFriendInput={this.handleAddFriendInput}
							addFriend={this.addFriendHandler}
						/>

						<Friends
							className="Friends"
							friends={this.props.friends}
							friendClickedEmails={this.state.friendClickedEmails}
							friendClicked={this.friendClicked}
						/>
					</div>
				) : (
					<div className="LoadingScreen">
						<img src={logo} className="LoadingPicture" alt="loading-logo" />
					</div>
				)}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		friends: state.friends.friends,
		fetchingFriends: state.friends.fetchingFriends,
	};
};

export default connect(mapStateToProps, {
	getFriends,
	addFriend,
})(App);
