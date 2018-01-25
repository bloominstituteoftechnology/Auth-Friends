import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends, addFriend, deleteFriend, editFriend } from '../actions/';

import Header from './Header';
import AddFriend from './AddFriend';
import EditFriend from './EditFriend';
import Friends from './Friends';
import Loader from './Loader';
import AppLogger from './AppLogger';

import logo from '../assets/logo.svg';

import '../styles/App.css';

class App extends Component {
	state = {
		friendClickedEmails: [],
		showEditingFriendsPane: null,
		editingFriendEmail: '',
		editingFriendIndex: '',
		editFriend: {
			name: '',
			age: '',
			email: '',
		},
	};

	componentDidMount() {
		this.setState({
			showEditingFriendsPane: false,
		});

		this.props.getFriends();
	}

	componentWillReceiveProps(nextProps) {
		// console.log(nextProps);
		// console.log(this.props);
		this.checkStatus();
		// if (nextProps.friends !== this.props.friends) this.props.getFriends();
	}

	addFriendHandler = newFriend => {
		this.props.addFriend(newFriend);
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

	deleteFriend = index => {
		this.props.deleteFriend(index);
	};

	editFriendButtonClicked = (email, index) => {
		// console.log(index);
		if (!this.state.showEditingFriendsPane) {
			const editingFriend = this.props.friends.filter(friend => {
				return friend.email === email;
			});

			this.setState({
				addFriend: {
					name: editingFriend[0].name,
					age: editingFriend[0].age,
					email: editingFriend[0].email,
				},
			});
		}

		this.setState({
			showEditingFriendsPane: !this.state.showEditingFriendsPane,
			editingFriendEmail: email,
			editingFriendIndex: index,
		});

		// this.state.showEditingFriendsPane
		// will turn false
		// because setState is asynchronous
		if (this.state.showEditingFriendsPane)
			this.setState({
				addFriend: { name: '', age: '', email: '' },
				editingFriendEmail: '',
			});
	};

	editFriend = () => {
		// this.props.friends.forEach((friend, index) => {
		// 	if ()
		// })
		// console.log(this.props.friends);
		this.props.editFriend(this.state.addFriend, this.state.editingFriendIndex);

		this.setState({
			showEditingFriendsPane: !this.state.showEditingFriendsPane,
			addFriend: { name: '', age: '', email: '' },
			editingFriendEmail: '',
			editingFriendIndex: '',
		});
	};

	checkStatus = () => {};

	checkIfLoading = () => {
		// console.log(this.props.friendsFetched);
		// console.log('checking fi loading');
		return this.props.fetchingFriends;
	};

	checkIfLoaded = () => {
		// console.log('checkifloaded');
		return this.props.friendsFetched;
	};

	render() {
		// console.log(this.props);
		// console.log(this.state.addFriend);
		return (
			<div className="App">
				<Header />

				<div className="ShowFriends">
					{!this.state.showEditingFriendsPane ? (
						<AddFriend
							friendKeys={this.props.friends.map(friend => {
								return friend.email;
							})}
							addFriendHandler={this.addFriendHandler}
						/>
					) : (
						<EditFriend
							editName={this.state.addFriend.name}
							editAge={this.state.addFriend.age}
							editEmail={this.state.addFriend.email}
							editFriendButtonClicked={this.editFriendButtonClicked}
							handleEditFriendInput={this.handleAddFriendInput}
							editFriend={this.editFriend}
						/>
					)}

					{!this.props.fetchingFriends ? (
						<Friends
							className="Friends"
							friends={this.props.friends}
							friendClickedEmails={this.state.friendClickedEmails}
							friendClicked={this.friendClicked}
							deleteFriend={this.deleteFriend}
							editFriendButtonClicked={this.editFriendButtonClicked}
							editingFriendEmail={this.state.editingFriendEmail}
						/>
					) : (
						<img src={logo} className="LoadingPicture" alt="loading-logo" />
					)}
				</div>

				<Loader
					isLoading={this.checkIfLoading}
					isLoaded={this.checkIfLoaded}
					status={this.props.error}
				/>

				<AppLogger appState={this.props} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		friends: state.friends.friends,
		fetchingFriends: state.friends.fetchingFriends,
		friendsFetched: state.friends.friendsFetched,
		updatingFriend: state.friends.updatingFriend,
		friendsSaved: state.friends.friendsSaved,
		error: state.friends.error,
	};
};

export default connect(mapStateToProps, {
	getFriends,
	addFriend,
	deleteFriend,
	editFriend,
})(App);
