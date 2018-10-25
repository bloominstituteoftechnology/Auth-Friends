import React, { Component } from 'react';
import './App.css';
import FriendsContainer from './Component/FriendsContainer';
import FriendsForm from './Component/FriendsForm';
import Navigation from './Component/Navigation';
// import axios from 'axios';
import { connect } from 'react-redux';
import { fetchFriends, addFriend } from './Action';
import { Route } from 'react-router-dom';

// const blankFriend = {
// 	name: '',
// 	age: null,
// 	email: ''
// };

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			friend: {
				name: '',
				age: '',
				email: ''
			},
			editingId: null,
			activeFriend: null,
			isEditing: false
		};
	}

	componentDidMount() {
		this.props.fetchFriends();
	}

	formHandler = (e) => {
		this.setState({
			friend: {
				...this.state.friend,
				[e.target.name]: e.target.value
			}
		});
	};

	addNewFriend = (e) => {
		e.preventDefault();

		this.props.addFriend();
		// 	const { name, age, email } = this.state.friend;
		// 	if (name.length <= 0 || Number.isInteger(parseInt(age)).length <= 0 || email.length <= 0) {
		// 		alert('please add more info for your friend');
		// 	} else {
		//
		// 	}
	};

	// deleteFriend = (e, friendID) => {
	// 	e.preventDefault();
	// 	axios
	// 		.delete(`http://localhost:5000/friends/${friendID}`)
	// 		.then((res) => {
	// 			this.setState({
	// 				friends: res.data,
	// 				friend: {
	// 					name: '',
	// 					age: '',
	// 					email: '',
	// 					id: Date.now()
	// 				}
	// 			});
	// 		})
	// 		.catch((err) => console.log(err));
	// };

	// updateInfo = (e, friendID) => {
	// 	e.preventDefault();
	// 	axios
	// 		.put(`http://localhost:5000/friends/${friendID}`, this.state.friend)
	// 		.then((res) => {
	// 			this.setState({
	// 				friends: res.data,
	// 				friend: {
	// 					name: '',
	// 					age: '',
	// 					email: '',
	// 					friend: blankFriend,
	// 					isEditing: false
	// 				}
	// 			});
	// 		})
	// 		.catch((err) => console.log(err));
	// };

	setUpUpdateForm = (e, friend) => {
		e.preventDefault();
		this.setState({
			friend,
			isEditing: true
		});
	};

	render() {
		const { isEditing } = this.state;
		return (
			<div className="App">
				<Route path="/" render={(props) => <Navigation {...props} />} />
				<Route
					exact
					path="/"
					render={(props) => (
						<FriendsForm
							{...props}
							friends={this.props.friends}
							formHandler={this.formHandler}
							addNewFriend={this.addNewFriend}
						/>
					)}
				/>
				<Route
					exact
					path="/"
					render={(props) => (
						<FriendsContainer
							friends={this.props.friends}
							{...props}
							isEditing={isEditing}
							deleteFriend={this.deleteFriend}
							updateInfo={this.updateInfo}
						/>
					)}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return {
		friends: state.friendsReducer.friends,
		isFetching: state.isFetching
	};
};

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(mapStateToProps, {
	fetchFriends,
	addFriend
})(App);
