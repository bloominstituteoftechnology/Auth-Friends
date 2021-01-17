import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	const logout = () => {
		localStorage.removeItem('token');
	};

	return (
		<div className="navbar__container">
			<h1>FRIENDS</h1>
			<ul className="links__list">
				<Link to="/friends">friends</Link>
				<Link to="/login" className="login nav__btn">
					Log in
				</Link>
				<Link onClick={logout} to="/login" className="signout nav__btn">
					Sign out
				</Link>
			</ul>
		</div>
	);
}
