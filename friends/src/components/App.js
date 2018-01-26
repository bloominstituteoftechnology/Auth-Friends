import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends, addFriend, deleteFriend, editFriend } from '../actions/';

import Header from './Header';
import AddFriend from './AddFriend';
import Friends from './Friends';
import Status from './Status';
import AppLogger from './AppLogger';

import logo from '../assets/logo.svg';

import '../styles/App.css';

class App extends Component {
	state = {
		//
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

	// friendClicked = email => {
	// 	if (this.state.friendClickedEmails.includes(email))
	// 		this.setState({
	// 			friendClickedEmails: this.state.friendClickedEmails.filter(
	// 				clickedEmail => clickedEmail !== email
	// 			),
	// 		});
	// 	else
	// 		this.setState({
	// 			friendClickedEmails: [...this.state.friendClickedEmails, email],
	// 		});
	// };

	deleteFriend = index => {
		this.props.deleteFriend(index);
	};

	editFriendButtonClicked = (email, index) => {
		// console.log(index);
		// if (!this.state.showEditingFriendsPane) {
		// 	const editingFriend = this.props.friends.filter(friend => {
		// 		return friend.email === email;
		// 	});
		// this.setState({
		// 	addFriend: {
		// 		name: editingFriend[0].name,
		// 		age: editingFriend[0].age,
		// 		email: editingFriend[0].email,
		// 	},
		// });
		// };
		// this.setState({
		// 	showEditingFriendsPane: !this.state.showEditingFriendsPane,
		// 	editingFriendEmail: email,
		// 	editingFriendIndex: index,
		// });
		// this.state.showEditingFriendsPane
		// will turn false
		// because setState is asynchronous
		// if (this.state.showEditingFriendsPane)
		// 	this.setState({
		// 		addFriend: { name: '', age: '', email: '' },
		// 		editingFriendEmail: '',
		// 	});
	};

	editFriend = (friend, index) => {
		// this.props.friends.forEach((friend, index) => {
		// 	if ()
		// })
		// console.log(this.props.friends);
		this.props.editFriend(friend, index);

		// this.setState({
		// 	showEditingFriendsPane: !this.state.showEditingFriendsPane,
		// 	addFriend: { name: '', age: '', email: '' },
		// 	editingFriendEmail: '',
		// 	editingFriendIndex: '',
		// });
	};

	checkStatus = () => {};

	render() {
		// console.log(this.props);
		// console.log(this.state.addFriend);
		return (
			<div className="App">
				<Header />

				<Status status={this.props} />

				<div className="ShowFriends">
					<AddFriend
						friendKeys={this.props.friends.map(friend => {
							return friend.email;
						})}
						addFriendHandler={this.addFriendHandler}
					/>

					{this.props.friendsFetched ||
					this.props.friendsSaved ||
					this.props.friendUpdated ||
					this.props.friendDeleted ? (
						<Friends
							className="Friends"
							friends={this.props.friends}
							editFriend={this.editFriend}
							deleteFriend={this.deleteFriend}
						/>
					) : (
						<img src={logo} className="LoadingPicture" alt="loading-logo" />
					)}
				</div>

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
		savingFriends: state.friends.savingFriends,
		friendsSaved: state.friends.friendsSaved,
		updatingFriend: state.friends.updatingFriend,
		friendUpdated: state.friends.friendUpdated,
		deletingFriend: state.friends.deletingFriend,
		friendDeleted: state.friends.friendDeleted,
		error: state.friends.error,
	};
};

export default connect(mapStateToProps, {
	getFriends,
	addFriend,
	deleteFriend,
	editFriend,
})(App);
