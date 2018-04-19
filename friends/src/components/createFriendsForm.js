import React, { Component } from "react";

const CreateFriendsForm = props => {
	console.log("Create props: ", props);
	return (
		<form>
			<input type="text" name="friendName" placeholder="Enter friend's name" />
			<input type="text" name="age" placeholder="Enter friend's age" />
			<input type="text" name="email" placeholder="Enter friend's email" />
		</form>
	);
};

export default CreateFriendsForm;
