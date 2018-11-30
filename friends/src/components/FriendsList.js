import React from "react";
import Friend from "./Friend";

const FriendsList = props => {
	return (
		<div>
			{props.friends.map(friend => {
				console.log(props.friends);
				return <Friend key={Math.random()} friend={friend} />;
			})}
		</div>
	);
};

export default FriendsList;
