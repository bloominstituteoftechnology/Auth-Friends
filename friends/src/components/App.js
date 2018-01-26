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
		logs: null,
		actions: null,
	};

	componentWillMount() {
		this.setState({ logs: [], actions: [] });
	}

	componentDidMount() {
		this.setState({
			logs: ['App mounted'],
			actions: [
				'fetchingFriends',
				'friendsFetched',
				'savingFriends',
				'friendsSaved',
				'updatingFriends',
				'friendUpdated',
				'deletingFriend',
				'friendDeleted',
				'okToLoad',
				'error',
			],
		});

		this.props.getFriends();
	}

	componentWillReceiveProps(nextProps) {
		this.checkStates(nextProps);
	}

	checkStates = nextState => {
		const addLogs = [];

		for (let i = 0; i < this.state.actions.length; i++) {
			const action = this.state.actions[i];

			if (nextState[action] !== this.props[action]) {
				if (this.state.logs[0] !== action) addLogs.unshift(action);
			}
		}

		if (addLogs.length > 0)
			this.setState({ logs: [...addLogs, ...this.state.logs] });
	};

	addFriendHandler = newFriend => {
		this.props.addFriend(newFriend);
	};

	deleteFriend = index => {
		this.props.deleteFriend(index);
	};

	editFriend = (friend, index) => {
		this.props.editFriend(friend, index);
	};

	deleteAllFriendsButtonHandler = _ => {
		if (
			this.props.friends.length > 0 &&
			window.confirm(
				'This will remove ALL your friends. This CANNOT be undone. Are you sure you want to continue?'
			)
		) {
			const count = this.props.friends.length;

			for (let i = 0; i <= count; i++) {
				this.deleteFriend(0);
			}
		}
	};

	render() {
		return (
			<div className="App">
				<Header />

				<div className="StatusBarHeader">
					<div className="DeleteAllButtonContainer">
						<button onClick={this.deleteAllFriendsButtonHandler}>
							delete all
						</button>
					</div>

					<AddFriend
						friendKeys={this.props.friends.map(friend => {
							return friend.email;
						})}
						addFriendHandler={this.addFriendHandler}
					/>

					<Status status={this.props} />
				</div>

				<div className="ShowFriends">
					{this.props.okToLoad ? (
						<Friends
							className="Friends"
							friends={this.props.friends}
							editFriend={this.editFriend}
							deleteFriend={this.deleteFriend}
							friendKeys={this.props.friends.map(friend => {
								return friend.email;
							})}
						/>
					) : (
						<img src={logo} className="LoadingPicture" alt="loading-logo" />
					)}
				</div>

				<AppLogger logs={this.state.logs} />
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
		okToLoad: state.friends.okToLoad,
		error: state.friends.error,
	};
};

export default connect(mapStateToProps, {
	getFriends,
	addFriend,
	deleteFriend,
	editFriend,
})(App);
