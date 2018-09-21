// React
import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import '../../css/Friend.css';

export const Friend = props => {
	return(
		<div className = 'friend'>
			<p>Name: { props.friend.name }</p>
			<p>Age: { props.friend.age }</p>
			<p>Email: { props.friend.email }</p>
			<p>Favorite Color: { props.friend.favColor }</p>
			
			<div><Link to = { `/friendslist/${ props.friend.id }` }>Edit { props.friend.name }'s Profile</Link></div>
		</div>
	);
}
