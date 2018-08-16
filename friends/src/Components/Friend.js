import React from "react";
import FriendForm from "../Components/FriendForm";

const Friend = ({
	friend: { id, name, age, email },
	onFormSubmit,
	isUpdating,
	isDeleting,
	deleteFriend,
}) => {
	return (
		<div
			style={{
				borderBottom: "1px solid #dbdbdb",
				marginBottom: "1rem",
			}}
		>
			<h3>
				{name},{age}
			</h3>
			<a href={`mailto:${email}`}>
				<small>{email}</small>
			</a>
			{isDeleting ? (
				<div>Killing your friend ya jerk</div>
			) : (
				<button onClick={() => deleteFriend(id)}>Murder Friend</button>
			)}
			{isUpdating ? (
				<div>Updating your stuff noob</div>
			) : (
				<FriendForm onFormSubmit={data => onFormSubmit(id, data)} />
			)}
		</div>
	);
};

export default Friend;
