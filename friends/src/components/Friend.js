import React from 'react';

export const Friend = ({ id, name, age, email }) => {
	return (
		<div className="friend">
			<div>ID: {id}</div>
			<div>Name: {name}</div>
			<div>Age: {age}</div>
			<div>Email: {email}</div>
		</div>
	)
}

export default Friend;