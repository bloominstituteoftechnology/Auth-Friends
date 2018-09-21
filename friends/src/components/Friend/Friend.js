// React
import React from 'react';
import { Link } from 'react-router-dom';

export const Friend = props => {
	return(
		<div>
			<p><Link to = { `/friendslist/${ props.friend.id }` }>Name: { props.friend.name }</Link></p>
			<p>Age: { props.friend.age }</p>
			<p>Email: { props.friend.email }</p>
			<p>Favorite Color: { props.friend.favColor }</p>
		</div>
	);
}
