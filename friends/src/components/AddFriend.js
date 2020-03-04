import React, { useState } from 'react';
import api from '../utils/api';
import './AddFriend.scss';

export default function AddFriend(props) {
	const [ friends, setFriends ] = useState({
		id: Date.now(),
		name: '',
		age: '',
		email: ''
	});
	const handeleChange = (e) => {
		setFriends({
			...friends,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		api()
			.post('/api/friends', friends)
			.then((res) => {
				props.history.push('/friends');
			})
			.catch((err) => {
				console.log(err);
			});

		resetForm();
	};

	const resetForm = () => {
		setFriends(friends);
	};

	return (
		<div className="add">
			<form onSubmit={handleSubmit}>
				<label htmlFor="name" />
				<input onChange={handeleChange} text="text" name="name" placeholder="Name" value={friends.name} />
				<label htmlFor="age" />
				<input onChange={handeleChange} text="text" name="age" placeholder="Age" value={friends.age} />
				<label htmlFor="email" />
				<input onChange={handeleChange} text="text" name="email" placeholder="Email" value={friends.email} />

				<button>Add</button>
			</form>
		</div>
	);
}
