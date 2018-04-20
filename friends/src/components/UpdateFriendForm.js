import React from "react";

const UpdateFriendForm = props => {
	// console.log("Update: ", props.friend);
	return (
		<form>
			<input type="text" name="name" placeholder="Enter friend's name" />
			<input type="text" name="age" placeholder="Enter friend's age" />
			<input type="text" name="email" placeholder="Enter friend's email" />
			<button type="button" onClick={() => props.updateFriends(props.friend)}>
				Update Friend
			</button>
		</form>
	);
};

export default UpdateFriendForm;
