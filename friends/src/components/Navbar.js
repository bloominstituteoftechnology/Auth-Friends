import React from "react";
import "./css/Navbar.css";
import { Route, Link, Switch } from "react-router-dom";

import Login from "./Login";
import Friends from "./Friends";
import PrivateRoute from "./PrivateRoute";

const Navbar = props => {
	return (
		<div>
			<nav
				className="navbar">
				<ul>
					<li>
						<Link className="link" to="/login">Login</Link>
					</li>
					<li>
						<Link className="link" to="/friends">Secret</Link>
					</li>
				</ul>
			</nav>
			<Switch>
				<PrivateRoute exact path="/friends" component={Friends} />
				<Route path="/login" component={Login} />
				<Route component={Login} />
			</Switch>
		</div>
	)
}

export default Navbar;