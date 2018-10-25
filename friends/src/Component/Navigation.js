import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
	return (
		<div className="nav-wrapper">
			<Link to="/edit-friend">{props.isEditing ? 'Home' : 'Edit Friend'}</Link>
		</div>
	);
};

export default Navigation;
