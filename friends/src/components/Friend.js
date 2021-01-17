import React from 'react';

function Friend({ friend }) {
	return (
		<div className="friend__container">
			<h3>{friend.name}</h3>
			<p className="age">Age: {friend.age}</p>
			<p className="email">{friend.email}</p>
		</div>
	);
}

export default Friend;
