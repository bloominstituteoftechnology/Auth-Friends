import React from 'react';
import { Redirect } from 'react-router-dom';
import './LogOut.scss';

export default function LogOut(props) {
	// Nothing has to happen on the server to log out,
	// just delete the token
	localStorage.removeItem('token');
	return (
		<div className="logout">
			return <Redirect to="/login" />
		</div>
	);
}
