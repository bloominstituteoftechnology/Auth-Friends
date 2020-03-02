import React from 'react';
import './Friends.scss';

export default function Friends(props) {
	return (
		<div className="cards">
			<div className="card">
				<p>Name: {props.name}</p>
				<p>Age: {props.age}</p>
				<p>Email: {props.email}</p>
			</div>
		</div>
	);
}
