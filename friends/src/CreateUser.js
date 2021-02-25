import React, { useState } from "react";
import axios from "axios";

export default function CreateUser() {
	const initialState = {
		id: Date.now,
		name: "",
		age: "",
		email: "",
	};

	const [friend, setFriend] = useState(initialState);

	const handleChange = (e) => {
		setFriend({
			...friend,
			[e.target.name]: e.target.value,
		});
	};
	const onSubmit = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:5000/api/friends", friend)
			.then((response) => {
				console.log(response);
				setFriend(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div>
			<h2>Post a New Friend</h2>
			<form onSubmit={onSubmit}>
				<label htmlFor="name">
					Name
					<input
						name="name"
						value={friend.name}
						onChange={handleChange}
					/>
				</label>
				<label htmlFor="" age>
					Age
					<input
						name="age"
						value={friend.age}
						onChange={handleChange}
					/>
				</label>
				<label htmlFor="email">
					Email
					<input
						name="email"
						value={friend.email}
						onChange={handleChange}
					/>
				</label>
			</form>
			<div>
				<button onChange={handleChange}></button>
			</div>
		</div>
	);
}
