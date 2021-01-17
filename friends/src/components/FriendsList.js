import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from './Friend';

function FriendsList() {
	const [friends, setFriends] = useState([]);

	useEffect(() => {
		getFriends();
	}, []);

	const getFriends = () => {
		axiosWithAuth()
			.get('/friends')
			.then(res => {
				console.log(res.data);
				setFriends(res.data);
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="thelist__container">
			<h1>The Friend List</h1>
			<div className="friends">
				{friends.map(friend => {
					return <Friend friend={friend} />;
				})}
			</div>
		</div>
	);
}

export default FriendsList;
