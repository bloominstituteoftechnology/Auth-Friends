import React from 'react';
import { Link } from 'react-router-dom';
import { getToken } from '../utils/api';

import ProtectedRoute from '../components/ProtectedRoute';
import LogOut from '../components/LogOut';
import './Nav.scss';

export default function Nav() {
	const loggedIn = getToken();
	return (
		<div className="Nav">
			<h1>Auth Friends</h1>

			{loggedIn && (
				<Link to="/logout" className="logout">
					Log Out
				</Link>
			)}
			<ProtectedRoute exact path="/logout" component={LogOut} />
		</div>
	);
}
