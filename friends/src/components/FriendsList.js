import React, { useState, useEffect } from 'react';
import api from '../utils/api';

export default function FriendsList() {
	const [ friends, setFriends ] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	useEffect(() => {
		api()
			.get('api/friends')
			.then((res) => {
				setFriends(res.data);
				setFriends([
					...friends,
					{
						id: res.data.id,
						name: res.data.name,
						age: res.data.age,
						email: res.data.email
					}
				]);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name" />
			<input type="text" name="name" placeholder="Name" value={friends.name} />
			<label htmlFor="age" />
			<input type="text" name="age" placeholder="Age" value={friends.age} />
			<label htmlFor="email" />
			<input type="email" name="email" placeholder="Email" value={friends.email} />
			<button>Submit</button>
		</form>
	);
}
