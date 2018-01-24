import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends, addFriend } from '../actions/';

import Header from './Header';
import AddFriend from './AddFriend';
import Friends from './Friends';

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
	};

	componentDidMount() {
		this.setState({ isAddingFriend: false });

		this.props.getFriends();
	}

	addFriendButtonClicked = () => {
		this.setState({ isAddingFriend: !this.state.isAddingFriend });
	};

	addFriendHandler = () => {
		this.props.addFriend(this.state.addFriend);
		this.addFriendButtonClicked();
	};

	handleAddFriendInput = (name, value) => {
		const addFriend = { ...this.state.addFriend };
		if (name === 'name') addFriend.name = value;
		else if (name === 'number') addFriend.age = Number(value);
		else if (name === 'email') addFriend.email = value;
		this.setState({ addFriend });
	};

	render() {
		console.log(this.props);
		return (
			<div className="App">
				<Header />
				<Friends
					friends={this.props.friends}
					addFriendText={this.state.addFriend}
				/>
				<AddFriend
					isAddingFriend={this.state.isAddingFriend}
					addFriendButtonClicked={this.addFriendButtonClicked}
					handleAddFriendInput={this.handleAddFriendInput}
					addFriend={this.addFriendHandler}
				/>
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
