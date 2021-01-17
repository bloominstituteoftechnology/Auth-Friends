import React, { useState } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

function AddFriend({ setDisplayAddForm, friends, setFriends }) {
	const [newFriend, setNewFriend] = useState({
		name: '',
		age: 0,
		email: ''
	});

	const handleChange = e => {
		setNewFriend({
			...newFriend,
			[e.target.name]: e.target.value
		});
	};

	const addNewFriend = e => {
		axiosWithAuth()
			.post('/friends', newFriend)
			.then(res => {
				console.log(res);
				setDisplayAddForm(false);
				// setFriends([newFriend, ...friends]);
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="add__container">
			<div className="add__form__container">
				<h1>Add A Friend</h1>
				<form onSubmit={addNewFriend}>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						id="name"
						value={newFriend.name}
						onChange={handleChange}
						placeholder="Name"
					/>
					<label htmlFor="age">Age</label>
					<input
						type="text"
						name="age"
						id="age"
						value={newFriend.age}
						onChange={handleChange}
						placeholder="Age"
					/>

					<label htmlFor="email">Email</label>
					<input
						type="text"
						name="email"
						id="email"
						value={newFriend.email}
						onChange={handleChange}
						placeholder="Email"
					/>
					<button disabled={!newFriend} type="submit">
						Add
					</button>
				</form>
			</div>
		</div>
	);
}

export default AddFriend;
