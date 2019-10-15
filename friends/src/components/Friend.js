import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

export const Friend = ({ friend, startEditFriend, deleteFriend }) => {
	const onEdit = (e) => {
		startEditFriend(friend);
	}
	const onDelete = (e) => {
		deleteFriend(friend.id);
	}
	return (
		<div className="friend">
			<div>ID: {friend.id}</div>
			<div>Name: {friend.name}</div>
			<div>Age: {friend.age}</div>
			<div>Email: {friend.email}</div>
			<button onClick={onEdit}>Edit</button>
			<button onClick={onDelete}>Delete</button>
		</div>
	)
}

export default connect(state => state, actionCreators)(Friend);