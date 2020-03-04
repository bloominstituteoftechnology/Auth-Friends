import React from 'react';
import { Link } from 'react-router-dom';
import { getToken } from '../utils/api';

import ProtectedRoute from '../components/ProtectedRoute';
import FriendsList from './FriendsList';
import LogOut from '../components/LogOut';
import './Nav.scss';

export default function Nav() {
	const loggedIn = getToken();
	return (
		<div className="Nav">
			<h1>Auth Friends</h1>
			<div className="nav-links">
				<Link to="/add-friend">Add Friend</Link>
				{loggedIn && <Link to="/logout">Log Out</Link>}
			</div>

			<ProtectedRoute exact path="/logout" component={LogOut} />
			<ProtectedRoute exact path="/friend-list" component={FriendsList} />
		</div>
	);
}
