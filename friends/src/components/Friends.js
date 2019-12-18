import React, { useState, useEffect } from "react";
import { authAxios } from "../utils/authAxios";

import FriendCard from "./FriendCard";
import AddFriendFooter from "./AddFriendFooter";

import "./css/Friends.css";

const Friends = props => {

	const [friends, setFriends] = useState([]);

	const getData = () => {
		authAxios().get("/friends")
				   .then(res => {
				   		setFriends(res.data)
				   })
				   .catch(err => {
				   		console.log(err);
				   })
	}

	useEffect(() => {
		getData();
	}, [friends])

	return (
		<div className="container">
		<div className="container-friends">
			<h1><i className="fas fa-user-friends fa-2x"></i></h1>
			<div className="container-card">
				{friends.map(friend => (
					<FriendCard key={friend.id} friend={friend} />
				))
				}
			</div>
		</div>
		<AddFriendFooter />
		</div>
	)
}

export default Friends;