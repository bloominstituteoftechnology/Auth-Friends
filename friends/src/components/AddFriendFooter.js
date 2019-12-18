import React, { useState, useEffect } from "react";
import { authAxios } from "../utils/authAxios";

import "./css/AddFriendFooter.css";

const AddFriendFooter = props => {

	const a = [];
	const [ages, setAges] = useState(a);
	const [friend, setFriend] = useState({ id: null, name: "", age: 19, email: "" });

	useEffect(() => {
		ageGenerator();
	}, []);

	const postData = event => {
		event.preventDefault();
		setFriend({...friend, id: Date.now() })
		authAxios().post("/friends", friend)
				   .then(res => console.log(res))
				   .catch(err => console.log(err))
	}

	const handleChanges = event => {
		if (event.target.name == "age") {
			console.log(event.target.value, typeof event.target.value);
			setFriend({...friend, [event.target.name]: event.target.value })
		}
		setFriend({...friend, [event.target.name]: event.target.value });
	}

	function ageGenerator(lowerBound = 19, upperBound = 100) {
		for(let i = lowerBound; i < upperBound; ++i) { a.push(i) }
		setAges(a);
		return ages;
	}

	return (
		<div className="footer">
			<form className="footer-form" onSubmit={postData}>
				<input
					className="footer-input"
					type="text"
					name="name"
					placeholder="Friend Name"
					value={friend.name}
					onChange={handleChanges}
				/>
				<select
					name="age"
					onChange={handleChanges}
					className="footer-input"
				>
					{ages.map(age => (
						<option value={age}>{age}</option>
					))
					}
				</select>
				<input
					className="footer-input"
					type="text"
					name="email"
					placeholder="Friend Email"
					value={friend.email}
					onChange={handleChanges}
				/>
				<button className="add-friend-button"><i className="fas fa-plus-circle fa-2x"></i></button>
			</form>
		</div>
	)
}

export default AddFriendFooter;