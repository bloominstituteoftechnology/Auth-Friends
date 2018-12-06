import React from "react";

const Friend = props => {
	return (
		<>
		<li>{props.friend.name}</li>
		<li>{props.friend.age}</li>
		<li>{props.friend.email}</li>
		</>
	)
};

export default Friend;
