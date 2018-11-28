import React from "react";

const Friend = (props) => {
	return(
		<div>
			{props.friend.id}
			{props.friend.name}
			{props.friend.age}
			{props.friend.email}
			<button>Update</button>
		</div>
	)
}

export default Friend;