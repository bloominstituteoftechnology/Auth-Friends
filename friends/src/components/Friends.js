import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as withAuth from '../helpers/withAuth';
import * as actionCreators from '../state/actionCreators';
import Friend from './Friend';

export const Friends = (props) => {
	const { 
		isLoading, friendsList, addFriend, 
		getFriendsList, onFriendsInputChange, addFriendToList 
	} = props;
	useEffect(() => {
		getFriendsList();
		return () => { };
	}, [])
	const onInputChange = e => {
		onFriendsInputChange(e.target);
	}
	const onAddFriend = e => {
		e.preventDefault();
		addFriendToList(addFriend);
	}
	return withAuth.isLoggedIn() && isLoading ? (
		<div className="friends">
			Loading list of friends...
		</div>
	) : !isLoading ? (
			<div className="friends">
				<h1>List of friends</h1>
				{
					friendsList ?
						friendsList.map(friend => <Friend key={friend.id} {...friend} />) :
						null
				}
				<h1>Add a friend</h1>
				<form onSubmit={onAddFriend}>
					<label htmlFor="name">Name:</label>
					<input
						id="name"
						name="name"
						type="text"
						value={addFriend.name}
						onChange={onInputChange}
					/>
					<label htmlFor="age">Age:</label>
					<input
						id="age"
						name="age"
						type="number"
						value={addFriend.age}
						onChange={onInputChange}
					/>
					<label htmlFor="email">Email:</label>
					<input
						id="email"
						name="email"
						type="email"
						value={addFriend.email}
						onChange={onInputChange}
					/>
					<button type="submit">Submit</button>
				</form>
			</div>
		) : null
}

export default connect(state => state, actionCreators)(Friends);