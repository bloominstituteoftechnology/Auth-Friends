import React from 'react';

function Friend({ friend }){
	return (
		<div>
			<h2>{friend.name}</h2>
			<h3>{friend.email}</h3>
			<h3>{friend.age}</h3>
	</div>
	)
}

export default Friend;