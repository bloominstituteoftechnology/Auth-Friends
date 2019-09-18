import React from 'react';
import uuid from 'uuid/v1';
import axiosWithAuth from '../utils/axiosWithAuth';

function AddFriend({ updateFriends }) {
	const [newFriend, setNewFriend] = React.useState({
		username: "", 
		email: "",
		age: ""
	})

	function changeHandler(e) {
		e.target.name === "age" ? 
		setNewFriend({...newFriend, [e.target.name]: parseInt(e.target.value)}) 
		:setNewFriend({...newFriend, [e.target.name]: e.target.value})
	}

	function onSubmit (e) {
		e.preventDefault();
	 	const payload = {
			 ...newFriend,
			 id: uuid()
		 }
		
		axiosWithAuth().post("/friends", payload)
		 .then(res => {
			//  console.log(res.data)
			 updateFriends(res.data)
		})
		.catch(err => console.log(err))

		setNewFriend({	username: "", email: "", age: ""})

	}

	return (
		<form onSubmit={onSubmit}>
			<input 
				type="text"
				name="username"
				placeholder="Bill Joe"
				value={newFriend.username}
				onChange={changeHandler}
			/>
			<input 
				type="email"
				name="email"
				placeholder="BillyJope@gmail.com"
				value={newFriend.email}
				onChange={changeHandler}
			/>
			<input 
				type="text"
				name="age"
				placeholder="Age"
				value={newFriend.age}
				onChange={changeHandler}
			/>
			<button type="submit">Submit</button>
		</form>
	)
}

export default AddFriend;