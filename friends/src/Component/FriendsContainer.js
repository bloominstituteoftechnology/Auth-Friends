import React from 'react';

const FriendsContainer = ({ friends, deleteFriend, updateInfo, setUpUpdateForm }) => {
	if (!friends) {
		return <h2>Loading your firends..</h2>;
	}

	return (
		<div className="friends-wrapper">
			<h1>List of friends</h1>
			{friends.map((friend) => {
				return (
					<div className="friend-container" key={friend.id} onChange={setUpUpdateForm}>
						<h4>Name: {friend.name}</h4>
						<p>Age: {friend.age}</p>
						<p>Email: {friend.email}</p>
						<button
							className="update"
							onClick={(e) => {
								updateInfo(e, friend.id);
							}}
						>
							Update
						</button>
						<button
							className="delete"
							onClick={(e) => {
								deleteFriend(e, friend.id);
							}}
						>
							Delete
						</button>
					</div>
				);
			})}
		</div>
	);
};

export default FriendsContainer;
