import React from 'react';

const Friend = ({ friend }) => (
	<li>
		<div>{friend.name}</div>
		<div>{friend.age}</div>
		<div>{friend.email}</div>
	</li>
)

export default Friend;