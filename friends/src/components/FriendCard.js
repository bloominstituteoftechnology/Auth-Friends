import React from "react";

import "./css/Friends.css";

const FriendCard = (props) => {
	const { friend } = props;
	return (
		<div className="card">
			<div className="left">
			<h4>{friend.name}</h4>
			<h6>{friend.email}</h6>
			</div>
			<h1 className="right">{friend.age}</h1>
		</div>
	);
};

export default FriendCard;