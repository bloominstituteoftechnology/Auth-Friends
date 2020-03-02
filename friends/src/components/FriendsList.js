import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import './FriendList.scss';
import Friends from './Friends';

export default function FriendsList() {
	const [ friends, setFriends ] = useState([]);

	useEffect(() => {
		api()
			.get('api/friends')
			.then((res) => {
				console.log('friends', res.data);
				setFriends(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			{friends.map((friend, index) => {
				return <Friends name={friend.name} age={friend.age} email={friend.email} key={index} />;
			})}
		</div>
	);
}
